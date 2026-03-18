function joinUrl(base: string, path: string) {
  if (!base) return path;
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

export default function Navbar() {
  const baseUrl = process.env.WEB_HOME || "";

  const images = Array.from({ length: 6 }, (_, i) => {
    const n = i + 1;
    return {
      alt: `ตัวอย่างบ้านเดี่ยว 2 ชั้น ${n}`,
      src: joinUrl(baseUrl, `/img/home${n}.gif`),
    };
  });

  return (
    <div className="w-full">
      <h3 className="topt">ตัวอย่างบ้านเดี่ยว 2 ชั้น</h3>

      <div className="flex flex-wrap justify-center gap-0">
        {images.map((img, index) => (
          <div
            key={index}
            className="m-0 p-0 flex-shrink-0 w-full sm:w-1/3 md:w-[200px]"
          >
            <a href={baseUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={img.src}
                alt={img.alt}
                className="block w-full h-auto object-cover cursor-pointer"
                loading="lazy"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}