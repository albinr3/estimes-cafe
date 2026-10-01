"""Invoke the property-scoped Estime GA4 Admin MCP over stdio.

Usage: python analytics/ga4_admin_client.py read|create|archive
"""

from __future__ import annotations

import asyncio
import json
import os
import sys
from pathlib import Path

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

from ga4_admin_mcp import PLANNED_AUDIENCES, SUPERSEDED_AUDIENCE_NAMES


async def run(phase: str) -> None:
    if phase not in {"read", "create", "archive"}:
        raise ValueError("Use read, create, or archive")
    server = Path(__file__).with_name("ga4_admin_mcp.py")
    params = StdioServerParameters(command=sys.executable, args=[str(server)], env=dict(os.environ))
    async with stdio_client(params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            async def call(name: str, arguments: dict | None = None) -> dict:
                response = await session.call_tool(name, arguments or {})
                if response.isError:
                    raise RuntimeError(f"{name}: {response.content}")
                data = response.structuredContent
                if not data:
                    data = json.loads(response.content[0].text)
                return data

            if phase == "read":
                config = await call("read_configuration")
                print(json.dumps({
                    "property": config["property"],
                    "retention": config["retention"],
                    "attribution": config["attribution"],
                    "audiences": [
                        {"name": x["display_name"], "days": x["membership_days"]}
                        for x in config["audiences"]
                    ],
                }, ensure_ascii=False, indent=2))
                return
            if phase == "create":
                for key in PLANNED_AUDIENCES:
                    print(json.dumps(await call("ensure_planned_audience", {"key": key}), ensure_ascii=False))
            else:
                for name in sorted(SUPERSEDED_AUDIENCE_NAMES):
                    print(json.dumps(
                        await call("archive_superseded_audience", {"display_name": name}),
                        ensure_ascii=False,
                    ))


if __name__ == "__main__":
    asyncio.run(run(sys.argv[1] if len(sys.argv) > 1 else "read"))
