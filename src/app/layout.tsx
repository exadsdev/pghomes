import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "../globals.css";

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";

export const metadata: Metadata = {
  title: "Official PG Home - รับสร้างบ้านเดี่ยว 2 ชั้น",
  description:
    "บริษัท พีจีโฮม จำกัด บริการรับสร้างบ้านเดี่ยว 2 ชั้น ราชบุรี นครปฐม สมุทรสงคราม ประสบการณ์ 13+ ปี ผลงาน 200+ หลัง",
  keywords:
    "รับสร้างบ้าน, บ้านเดี่ยว, 2 ชั้น, ราชบุรี, นครปฐม, สมุทรสงคราม",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body>
        {googleAdsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${googleAdsId}');
              `}
            </Script>
          </>
        ) : null}

        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
