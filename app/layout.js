import "./globals.css";

export const metadata = {
  title: "Tsuzuku - Private habit tracker and focus companion",
  description:
    "Tsuzuku is a private, offline-first Android habit tracker, focus timer, minimal launcher, and insights app.",
  metadataBase: new URL("https://github.com/agupta07505/Tsuzuku"),
  openGraph: {
    title: "Tsuzuku",
    description:
      "A calm Android app for habits, focus sessions, minimal launching, insights, reminders, and local backup.",
    images: ["https://raw.githubusercontent.com/agupta07505/Tsuzuku/main/assets/screenshots/01_home.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
