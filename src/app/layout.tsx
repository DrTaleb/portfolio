import "./globals.css";
import "./main.scss";
import type { Metadata } from "next";
import Footer from "@/containers/footer/Footer";
import Navbar from "@/containers/navbar/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://drtaleb.org"),
  title: "محمد جواد طالب کارگر",
  description: "محمدجواد طالب کارگر برنامه نویس فرانت اند",
  keywords: [
    "محمدجوادطالب",
    "محمد جواد طالب",
    "محمدجواد طالب",
    "محمد جوادطالب",
    "محمد جواد طالب کارگر",
    "محمد جواد طالب برنامه نویس",
    "دکتر طالب",
    "طالب کارگر",
    "طالب",
  ],
  category: "سایت شخصی",
  openGraph: {
    title: "محمد جواد طالب کارگر",
    type: "website",
    siteName: "سایت شخصی محمد جواد طالب کارگر",
    url: "https://drtaleb.org",
    locale: "fa_IR",
    description: "محمد جواد طالب کارگر برنامه نویس فرانت اند",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="canonical" href="https://drtaleb.org" />
        <link rel='icon' type='image/svg' href='/icons/nextjs.svg' />
      </head>
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
