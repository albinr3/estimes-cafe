import type { Metadata } from "next";
import Header from "@/components/Header";
import styles from "./school.module.css";

export const metadata: Metadata = {
  title: "School Meal Order",
  description: "School meal ordering links and setup help.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "https://www.estimescafe.com/school/",
  },
};

const links = [
  {
    href: "https://mymealorder.com/Login.aspx",
    label: "Click Here To Log In To Meal Order",
    color: styles.login,
  },
  {
    href: "https://www.mymealorder.com/SignUp.aspx",
    label: "Click Here To Create An Account",
    color: styles.signup,
  },
  {
    href: "https://vimeo.com/channels/mymealorder/309517173",
    label: "Need Help Setting Up? Click Here",
    color: styles.help,
  },
];

export default function SchoolPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.content}>
          <h1 className="sr-only">School meal ordering</h1>

          <div className={styles.videoFrame}>
            <video
              className={styles.video}
              src="/school/school-intro.mp4"
              poster="/school/school-poster.jpg"
              autoPlay
              muted
              playsInline
              controls
              preload="metadata"
              aria-label="School meal ordering introduction"
            />
          </div>

          <nav className={styles.actions} aria-label="School meal ordering links">
            {links.map(({ href, label, color }) => (
              <a key={href} className={`${styles.action} ${color}`} href={href} rel="nofollow">
                <span>{label}</span>
                <span className={styles.arrow} aria-hidden="true">➜</span>
              </a>
            ))}
          </nav>
        </div>
      </main>
    </>
  );
}
