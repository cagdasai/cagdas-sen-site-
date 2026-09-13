import "./globals.css";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL("https://cagdassen.com"),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
