'use client';
import { useState } from "react";
import { COMPANY_CONFIG } from "@/../../shared/config";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate WhatsApp message
    const whatsappMessage = `สวัสดีค่ะ ฉันชื่อ ${formData.name}\nเบอร์โทร: ${formData.phone}\nอีเมล: ${formData.email}\n\nข้อความ: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/66${COMPANY_CONFIG.phone.primary.replace(/^0/, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            ติดต่อเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            พร้อมตอบคำถามและให้คำปรึกษาฟรี
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-8">ข้อมูลติดต่อ</h3>

            {/* Address */}
            <div className="mb-8">
              <h4 className="font-bold text-lg text-gray-800 mb-2">📍 ที่อยู่</h4>
              <p className="text-gray-600 leading-relaxed">
                {COMPANY_CONFIG.address.full}
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h4 className="font-bold text-lg text-gray-800 mb-2">📞 เบอร์โทรศัพท์</h4>
              <a
                href={`tel:${COMPANY_CONFIG.phone.primary}`}
                className="text-orange-500 hover:text-orange-600 font-bold text-lg"
              >
                {COMPANY_CONFIG.phone.display}
              </a>
            </div>

            {/* Email */}
            <div className="mb-8">
              <h4 className="font-bold text-lg text-gray-800 mb-2">✉️ อีเมล</h4>
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="text-orange-500 hover:text-orange-600 font-bold"
              >
                {COMPANY_CONFIG.email}
              </a>
            </div>

            {/* Line */}
            <div className="mb-8">
              <h4 className="font-bold text-lg text-gray-800 mb-2">💬 Line ID</h4>
              <p className="text-gray-600 font-mono">{COMPANY_CONFIG.lineId}</p>
            </div>

            {/* Business Hours */}
            <div className="mb-8">
              <h4 className="font-bold text-lg text-gray-800 mb-2">🕐 ชั่วโมงทำการ</h4>
              <p className="text-gray-600">
                {COMPANY_CONFIG.businessHours.days}
              </p>
              <p className="text-gray-600">
                {COMPANY_CONFIG.businessHours.start} - {COMPANY_CONFIG.businessHours.end}
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-4">🌐 ติดตามเรา</h4>
              <div className="flex gap-4">
                <a
                  href={COMPANY_CONFIG.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl"
                >
                  f
                </a>
                <a
                  href={COMPANY_CONFIG.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors text-xl"
                >
                  🎵
                </a>
                <a
                  href={COMPANY_CONFIG.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors text-xl"
                >
                  ▶
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">ชื่อ</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="ชื่อของคุณ"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">อีเมล</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="อีเมลของคุณ"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">เบอร์โทรศัพท์</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="เบอร์โทรของคุณ"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">ข้อความ</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="ข้อความของคุณ..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                ส่งข้อความผ่าน WhatsApp
              </button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                เราจะตอบกลับในเร็วที่สุด
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
