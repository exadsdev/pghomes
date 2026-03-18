import { CUSTOMER_REVIEWS } from "@/../../shared/config";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            ความพึงพอใจของลูกค้า
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ฟังความคิดเห็นจากลูกค้าที่เชื่อใจเรา
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.review}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-blue-700">{review.name}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">13+</div>
            <p className="text-gray-600">ปีประสบการณ์</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
            <p className="text-gray-600">ผลงานสำเร็จ</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-gray-600">ไม่เคยทิ้งงาน</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">5★</div>
            <p className="text-gray-600">ความพึงพอใจ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
