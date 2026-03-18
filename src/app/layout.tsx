import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "../globals.css";

export const metadata: Metadata = {
  title: "Official PG Home - รับสร้างบ้านเดี่ยว 2 ชั้น",
  description: "บริษัท พีจีโฮม จำกัด บริการรับสร้างบ้านเดี่ยว 2 ชั้น ราชบุรี นครปฐม สมุทรสงคราม ประสบการณ์ 13+ ปี ผลงาน 200+ หลัง",
  keywords: "รับสร้างบ้าน, บ้านเดี่ยว, 2 ชั้น, ราชบุรี, นครปฐม, สมุทรสงคราม",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body>
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
