import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">กลับหน้าหลัก</span>
          </Link>

          <h1 className="!text-3xl md:!text-4xl font-bold text-blue-700 mb-3">
            {title}
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            อัปเดตล่าสุด: {lastUpdated}
          </p>

          <article className="legal-content">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
