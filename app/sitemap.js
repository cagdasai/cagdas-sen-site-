export default function sitemap() {
  return [
    { url: "https://cagdassen.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://cagdassen.com/notlar", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];
}
