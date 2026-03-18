import { COMPANY_CONFIG } from "@/../../shared/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              
                <img
                src="/logo.png"
                alt="PG HOME"
                width={50}
                height={50}
                className="logo"
              />
             
              <div>
                <h3 className="font-bold text-lg">PG HOME</h3>
                <p className="text-xs text-blue-200">Official</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              {COMPANY_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors">
                  หน้าแรก
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  เกี่ยวกับเรา
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  บริการ
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-blue-100 hover:text-white transition-colors">
                  ผลงาน
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">บริการ</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-100">✓ ออกแบบบ้าน</li>
              <li className="text-blue-100">✓ ปรึกษาฮวงจุ้ย</li>
              <li className="text-blue-100">✓ คำนวณโครงสร้าง</li>
              <li className="text-blue-100">✓ ขออนุญาตก่อสร้าง</li>
              <li className="text-blue-100">✓ ยื่นกู้ธนาคาร</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">ติดต่อเรา</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-blue-200">📞 เบอร์โทร</p>
                <a
                  href={`tel:${COMPANY_CONFIG.phone.primary}`}
                  className="text-orange-400 hover:text-orange-300 font-bold"
                >
                  {COMPANY_CONFIG.phone.display}
                </a>
              </div>
              <div>
                <p className="text-blue-200">💬 Line ID</p>
                <p className="text-white font-mono">{COMPANY_CONFIG.lineId}</p>
              </div>
              <div>
                <p className="text-blue-200">✉️ อีเมล</p>
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="text-orange-400 hover:text-orange-300 break-all"
                >
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 py-8">
          {/* Service Areas */}
          <div className="mb-6">
            <h4 className="font-bold text-lg mb-3">พื้นที่บริการ</h4>
            <div className="flex flex-wrap gap-2">
              {COMPANY_CONFIG.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
            <a href="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">
              นโยบายความเป็นส่วนตัว
            </a>
            <span className="text-blue-600">|</span>
            <a href="/terms-of-service" className="text-blue-200 hover:text-white transition-colors">
              ข้อกำหนดและเงื่อนไข
            </a>
            <span className="text-blue-600">|</span>
            <a href="/cookie-policy" className="text-blue-200 hover:text-white transition-colors">
              นโยบายคุกกี้
            </a>
            <span className="text-blue-600">|</span>
            <a href="/refund-policy" className="text-blue-200 hover:text-white transition-colors">
              นโยบายการคืนเงิน
            </a>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-blue-700">
            <p className="text-blue-200 text-sm">
              © {currentYear} {COMPANY_CONFIG.name}. สงวนลิขสิทธิ์ทั้งหมด
            </p>
            <div className="flex gap-4">
              <a
                href={COMPANY_CONFIG.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href={COMPANY_CONFIG.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                TikTok
              </a>
              <a
                href={COMPANY_CONFIG.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
