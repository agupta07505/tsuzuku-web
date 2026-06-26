export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tsuzuku-web.vercel.app/sitemap.xml",
  };
}
