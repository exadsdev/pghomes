import { COMPANY_CONFIG } from "@/../../shared/config";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663437228210/ZfxT7AQG3yMPzF2TkPVmu3/pghome_hero_modern_house-59rBVPjD9Ei5KzUTDM2LVj.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-orange-500/90 text-white rounded-full text-sm font-medium">
            ✨ บริษัทรับสร้างบ้านมาตรฐาน
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {COMPANY_CONFIG.tagline}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            ประสบการณ์ {COMPANY_CONFIG.statistics.yearsExperience}+ ปี • ผลงาน {COMPANY_CONFIG.statistics.projectsCompleted}+ หลัง • ทีมวิศวกรมืออาชีพ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-orange-500 text-white rounded-lg font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              ปรึกษาฟรี
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all border-2 border-white"
            >
              ดูบริการของเรา
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-white/30">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400">
                {COMPANY_CONFIG.statistics.yearsExperience}+
              </div>
              <p className="text-gray-200 text-sm md:text-base mt-2">ปีประสบการณ์</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400">
                {COMPANY_CONFIG.statistics.projectsCompleted}+
              </div>
              <p className="text-gray-200 text-sm md:text-base mt-2">ผลงานสำเร็จ</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400">100%</div>
              <p className="text-gray-200 text-sm md:text-base mt-2">ไม่เคยทิ้งงาน</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
