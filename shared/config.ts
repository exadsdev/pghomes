/**
 * PG HOME OFFICIAL - Configuration File
 * ข้อมูลบริษัทและการตั้งค่าเว็บไซต์
 */

export const COMPANY_CONFIG = {
  // ข้อมูลบริษัท
  name: "บริษัท พีจีโฮม จำกัด",
  nameEn: "PG HOME Co., Ltd.",
  tagline: "ศูนย์รับสร้างบ้านพีจีโฮม งานคุณภาพ ตรงเวลา บริการอย่างมืออาชีพ",
  
  // เว็บไซต์และโดเมน
  websiteName: "Official PG Home",
  domain: "pghome.co.th",
  websiteUrl: "https://www.pghome.co.th",
  
  // ข้อมูลติดต่อ
  phone: {
    primary: "084-289-9794",
    display: "084-2899794",
  },
  lineId: "pghome4289",
  email: "pghome.con@gmail.com",
  
  // ที่อยู่
  address: {
    street: "518 ต.เจดีย์หัก",
    district: "อ.เมือง",
    province: "จ.ราชบุรี",
    postal: "70000",
    full: "518 ต.เจดีย์หัก อ.เมือง จ.ราชบุรี 70000",
  },
  
  // สถิติบริษัท
  statistics: {
    yearsExperience: 13,
    projectsCompleted: 200,
    registeredCapital: 5000000,
  },
  
  // พื้นที่บริการ
  serviceAreas: ["ราชบุรี", "นครปฐม", "สมุทรสงคราม"],
  
  // โซเชียลมีเดีย
  socialMedia: {
    facebook: "https://www.facebook.com/pghome.co.th/",
    tiktok: "https://www.tiktok.com/@pghomeofficial",
    youtube: "https://www.youtube.com/channel/UCKEoIVwk4W-ULz_pVj4im1w/",
  },
  
  // บริการ
  mainService: "รับสร้างบ้านเดี่ยว 2 ชั้น",
  serviceType: "One Stop Service - ครบจบในที่เดียว",
  
  // ชั่วโมงทำการ
  businessHours: {
    start: "09:00",
    end: "18:00",
    days: "จันทร์ - ศุกร์",
  },
  
  // คำอธิบายบริษัท
  description: "บริษัทรับสร้างบ้านมาตรฐาน เน้นคุณภาพวัสดุระดับพรีเมี่ยม ดูแลครบทุกขั้นตอน บริการรับสร้างบ้านราชบุรี นครปฐม และสมุทรสงคราม พร้อมทีมงานมืออาชีพที่คุณวางใจได้",
  
  // ข้อมูลเพิ่มเติม
  owner: "วิศวกร",
  guarantee: "ไม่เคยมีประวัติทิ้งงาน",
  warranty: "รับประกันผลงาน",
};

// ข้อมูลบริการ
export const SERVICES = [
  {
    id: "design",
    name: "การออกแบบ",
    description: "ออกแบบบ้านตามความต้องการและงบประมาณของคุณ",
    icon: "🏗️",
  },
  {
    id: "feng-shui",
    name: "ฮวงจุ้ย",
    description: "ปรึกษาฮวงจุ้ยเพื่อให้บ้านเป็นมงคล",
    icon: "✨",
  },
  {
    id: "structure",
    name: "คำนวณโครงสร้าง",
    description: "คำนวณโครงสร้างตามมาตรฐานวิศวกรรม",
    icon: "📐",
  },
  {
    id: "permit",
    name: "ขออนุญาตก่อสร้าง",
    description: "จัดการเอกสารขออนุญาตจากหน่วยงานที่เกี่ยวข้อง",
    icon: "📋",
  },
  {
    id: "loan",
    name: "ยื่นกู้ธนาคาร",
    description: "ช่วยเหลือในการยื่นกู้ธนาคารเพื่อการก่อสร้าง",
    icon: "🏦",
  },
  {
    id: "construction",
    name: "ก่อสร้าง",
    description: "ก่อสร้างตามแบบและสัญญาที่ตกลงกัน",
    icon: "👷",
  },
  {
    id: "interior",
    name: "ตกแต่งภายใน",
    description: "ตกแต่งภายในให้สวยงามและใช้งานได้สะดวก",
    icon: "🎨",
  },
  {
    id: "utilities",
    name: "ขอมิเตอร์และบ้านเลขที่",
    description: "จัดการเรื่องมิเตอร์น้ำ ไฟฟ้า และบ้านเลขที่",
    icon: "⚡",
  },
];

// ประเภทบ้าน
export const HOUSE_TYPES = [
  {
    id: "single-story",
    name: "บ้านชั้นเดียว",
    description: "บ้านเดี่ยวชั้นเดียว ออกแบบให้สะดวกสบาย",
  },
  {
    id: "two-story",
    name: "บ้าน 2 ชั้น",
    description: "บ้านเดี่ยว 2 ชั้น ใช้พื้นที่อย่างมีประสิทธิภาพ",
  },
];

// ข้อมูลรีวิวจากลูกค้า
export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "คุณเบิ้ล",
    location: "อ่างทอง",
    review: "บริษัท พี.จี.โฮม ให้คำปรึกษา และดูแลลูกค้าดีมากๆครับ บ้านสวยถูกใจคุ้มมากๆกับราคาที่จ่ายไปครับ",
    rating: 5,
  },
  {
    id: 2,
    name: "คุณกอล์ฟ",
    location: "ปากท่อ",
    review: "ผมดูงานของ พี.จี. โฮม ตั้งแต่เริ่ม ผมคิดว่าไม่แพงนะครับ ได้คุณภาพคุ้มค่าคุ้มราคามากๆครับ เวลาปัญหาปรึกษาได้ตลอด ไม่มีทิ้งงานครับ",
    rating: 5,
  },
  {
    id: 3,
    name: "คุณเปิ้ล",
    location: "จอมบึงและครอบครัว",
    review: "ไม่ผิดหวังค่ะ ที่เลือก พี.จี. โฮม",
    rating: 5,
  },
];

// ข้อมูลคุณภาพงาน
export const QUALITY_CATEGORIES = [
  {
    id: "structural",
    name: "หมวดโครงสร้าง",
    nameEn: "Structural",
    items: ["งานเสาเข็ม", "งานโครงหลังคา และมุงหลังคา", "งานก่ออิฐ ตั้งวงกบ และฝังท่อไฟฟ้า"],
  },
  {
    id: "architectural",
    name: "หมวดงานสถาปัตย์",
    nameEn: "Architectural",
    items: ["งานปูกระเบื้อง", "งานตกแต่งภายนอก", "งานตกแต่งภายใน"],
  },
  {
    id: "electrical",
    name: "หมวดงานไฟฟ้า",
    nameEn: "Electrical",
    items: ["งานติดตั้งสายไฟ", "งานติดตั้งสวิตช์และเต้าเสียบ", "งานติดตั้งไฟฟ้าภายนอก"],
  },
  {
    id: "qc",
    name: "การตรวจสอบคุณภาพ",
    nameEn: "QC",
    items: ["งานตรวจแบบก่อนสร้างจริง", "งานตรวจเก็บงานก่อนส่งมอบ", "งานตรวจสอบโดยวิศวกร"],
  },
];
