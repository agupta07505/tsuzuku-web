import "./globals.css";

export const metadata = {
  title: "Tsuzuku - Private habit tracker and focus companion",
  description:
    "Tsuzuku is a private, offline-first Android habit tracker, focus timer, minimal launcher, and insights app.",
  metadataBase: new URL("https://tsuzuku-web.vercel.app"),
  keywords: [
    "Tsuzuku",
    "habit tracker",
    "private habit tracker",
    "offline habit tracker",
    "offline-first habit tracker",
    "focus timer",
    "minimal launcher",
    "Android launcher",
    "insights companion",
    "productivity app",
    "kotlin compose",
    "Material 3 habit tracker",
    "privacy first habit tracker",
    "offline focus timer",
    "distraction free launcher",
    "bilingual motivational quotes",
    "Animesh Gupta",
    "streak tracker",
    "local backup restoration",
    "local-first database Room"
  ],
  authors: [{ name: "Animesh Gupta", url: "https://github.com/agupta07505" }],
  creator: "Animesh Gupta",
  publisher: "Animesh Gupta",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tsuzuku - Private habit tracker and focus companion",
    description:
      "A calm, private Android app for habits, focus sessions, minimal launching, insights, reminders, and local backup.",
    url: "https://tsuzuku-web.vercel.app",
    siteName: "Tsuzuku",
    images: [
      {
        url: "/images/screenshots/01-home.jpg",
        width: 1080,
        height: 2340,
        alt: "Tsuzuku Home Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsuzuku - Private habit tracker and focus companion",
    description:
      "Tsuzuku is a private, offline-first Android habit tracker, focus timer, minimal launcher, and insights app.",
    images: ["/images/screenshots/01-home.jpg"],
    creator: "@agupta07505",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
