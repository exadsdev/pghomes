'use client';
import { useState } from "react";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "บ้านสไตล์ Modern Thai",
    location: "ราชบุรี",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663437228210/ZfxT7AQG3yMPzF2TkPVmu3/pghome_house_gallery_1-M79LnxfsVfmdxGBzkCvkjL.webp",
    rooms: "3 ห้องนอน",
    bathrooms: "2 ห้องน้ำ",
    area: "340 ตร.ม.",
    description: "ดีไซน์หรูหรา ทันสมัย ผสมผสานความสวยงามของสถาปัตยกรรมไทยกับความทันสมัย",
  },
  {
    id: 2,
    title: "บ้านสไตล์ Minimalist Modern",
    location: "นครปฐม",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663437228210/ZfxT7AQG3yMPzF2TkPVmu3/pghome_house_gallery_2-CgiANJicKMdzwTcHQV74CW.webp",
    rooms: "4 ห้องนอน",
    bathrooms: "3 ห้องน้ำ",
    area: "280 ตร.ม.",
    description: "ออกแบบเรียบง่ายแต่หรูหรา ใช้พื้นที่อย่างมีประสิทธิภาพ ตกแต่งภายในสวยงาม",
  },
  {
    id: 3,
    title: "บ้านสไตล์ Contemporary",
    location: "สมุทรสงคราม",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663437228210/ZfxT7AQG3yMPzF2TkPVmu3/pghome_hero_modern_house-59rBVPjD9Ei5KzUTDM2LVj.webp",
    rooms: "5 ห้องนอน",
    bathrooms: "4 ห้องน้ำ",
    area: "420 ตร.ม.",
    description: "บ้านสมัยใหม่พร้อมสิ่งอำนวยความสะดวกครบครัน ออกแบบให้อยู่อย่างสบายใจ",
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            ผลงานของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ดูตัวอย่างบ้านที่สวยงามที่เราสร้างสำหรับลูกค้าที่พึงพอใจ
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(item)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="px-6 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors">
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.location}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>🛏️ {item.rooms}</span>
                <span>🚿 {item.bathrooms}</span>
                <span>📐 {item.area}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-4">{selectedProject.location}</p>
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{selectedProject.rooms}</div>\n                    <p className="text-sm text-gray-600">ห้องนอน</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{selectedProject.bathrooms}</div>
                    <p className="text-sm text-gray-600">ห้องน้ำ</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{selectedProject.area}</div>
                    <p className="text-sm text-gray-600">พื้นที่</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full px-6 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors"
                >
                  ปิด
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            สนใจสร้างบ้านของคุณ?
          </h3>
          <p className="text-gray-600 mb-6">
            ติดต่อเราวันนี้เพื่อปรึกษาฟรีและเริ่มต้นโครงการของคุณ
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105"
          >
            ติดต่อเรา
          </a>
        </div>
      </div>
    </section>
  );
}
