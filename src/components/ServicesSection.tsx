import { SERVICES } from "@/../../shared/config";

const PROCESS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663437228210/ZfxT7AQG3yMPzF2TkPVmu3/pghome_construction_process-2p338Y6XneEQH9pU4CbfH7.webp";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            บริการครบวงจรของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            One Stop Service - ครบจบในที่เดียว ตั้งแต่การออกแบบจนถึงการส่งมอบบ้านของคุณ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 text-orange-500 font-bold text-sm">
                ขั้นตอนที่ {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline Image */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-blue-700 mb-8">
            ขั้นตอนการสร้างบ้าน
          </h3>
          <img
            src={PROCESS_IMAGE}
            alt="Construction Process Timeline"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">ทำไมต้องเลือก PG HOME?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-bold text-lg mb-2">ไม่เคยทิ้งงาน</h4>
                <p className="text-blue-100">
                  ประสบการณ์ 13+ ปี ด้วยความมั่นใจและความรับผิดชอบต่อทุกโครงการ
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-bold text-lg mb-2">วัสดุคุณภาพพรีเมี่ยม</h4>
                <p className="text-blue-100">
                  เลือกวัสดุที่ดีที่สุด คัดสรรมาอย่างดี เพื่อความทนทาน
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-bold text-lg mb-2">ทีมวิศวกรมืออาชีพ</h4>
                <p className="text-blue-100">
                  เจ้าของเป็นวิศวกร พร้อมทีมงานที่มีประสบการณ์และความเชี่ยวชาญ
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-bold text-lg mb-2">ราคาคุ้มค่า</h4>
                <p className="text-blue-100">
                  ได้คุณภาพสูง ราคาเหมาะสม เน้นคุณภาพมากกว่ากำไร
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
