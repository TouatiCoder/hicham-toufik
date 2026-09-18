import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "هشام توفيق | مؤرخ، باحث، أستاذ ومحلل استراتيجي",
  description: "المعرفة تصنع الإنسان والعمران",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}