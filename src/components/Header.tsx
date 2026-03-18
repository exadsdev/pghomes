'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY_CONFIG } from "@/../../shared/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "หน้าแรก", href: "#home" },
    { label: "เกี่ยวกับเรา", href: "#about" },
    { label: "บริการ", href: "#services" },
    { label: "ผลงาน", href: "#portfolio" },
    { label: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          
           
              <img
                src="/logo.png"
                alt="PG HOME"
                width={50}
                height={50}
                className="logo"
              />
         
          
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-blue-700">PG HOME</h1>
            <p className="text-xs text-gray-600">Official</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${COMPANY_CONFIG.phone.primary}`}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            <span>📞</span>
            <span>{COMPANY_CONFIG.phone.display}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${COMPANY_CONFIG.phone.primary}`}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium mt-2"
            >
              <span>📞</span>
              <span>{COMPANY_CONFIG.phone.display}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
