import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Official DoorDash Logo
 * Red dash emblem + DOORDASH bold typography
 */
export function DoorDashLogo({ className = "", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "h-5",
    md: "h-7",
    lg: "h-9",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official DoorDash Red Dash Emblem */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} w-auto flex-shrink-0`}
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.072 7.375C21.724 3.99 18.528 1.5 14.772 1.5H1.5C0.672 1.5 0 2.172 0 3v3.75C0 7.578 0.672 8.25 1.5 8.25h13.272c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75H8.25c-.828 0-1.5.672-1.5 1.5V21c0 .828.672 1.5 1.5 1.5h6.522c3.756 0 6.952-2.49 8.3-5.875 1.23-3.088 1.23-6.162 0-9.25z"
          fill="#EB1700"
        />
      </svg>
      {/* DOORDASH Typography */}
      <span className="font-sans font-black tracking-tight text-xl sm:text-2xl text-[#191919]">
        DOOR<span className="text-[#EB1700]">DASH</span>
      </span>
    </div>
  );
}

/**
 * Official Uber Eats Logo
 * Dark "Uber" + Vivid Green "Eats" with official icon badge
 */
export function UberEatsLogo({ className = "", size = "md" }: LogoProps) {
  const badgeSizes = {
    sm: "w-6 h-6 text-[10px]",
    md: "w-8 h-8 text-xs",
    lg: "w-10 h-10 text-sm",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Uber Eats Dark Badge Icon */}
      <div
        className={`${badgeSizes[size]} rounded-lg bg-[#000000] flex items-center justify-center flex-shrink-0 shadow-sm border border-black/10`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-[#06C167]"
          aria-hidden="true"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      </div>

      {/* Uber Eats Brand Typography */}
      <div className="flex items-baseline gap-1">
        <span className="font-sans font-extrabold tracking-tight text-xl sm:text-2xl text-[#000000]">
          Uber
        </span>
        <span className="font-sans font-extrabold tracking-tight text-xl sm:text-2xl text-[#06C167]">
          Eats
        </span>
      </div>
    </div>
  );
}

/**
 * Official Grubhub Logo
 * Grubhub Red/Orange badge + Bold GRUBHUB typography
 */
export function GrubhubLogo({ className = "", size = "md" }: LogoProps) {
  const badgeSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Grubhub Utensil / Dish Icon Badge */}
      <div
        className={`${badgeSizes[size]} rounded-lg bg-[#F63440] flex items-center justify-center flex-shrink-0 shadow-sm`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-white"
          aria-hidden="true"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      </div>

      {/* GRUBHUB Brand Typography */}
      <span className="font-sans font-black tracking-tight text-xl sm:text-2xl text-[#F63440]">
        GRUBHUB
      </span>
    </div>
  );
}

