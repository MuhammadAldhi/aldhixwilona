const generateGallery = (year) => {
  return Array.from({ length: 9 }, (_, i) => ({
    src: new URL(`./images/${year}/${i + 1}.jpg`, import.meta.url).href,
    alt: `Memory ${year} Art - ${i + 1}`
  }));
};

export const GaleryData = {
  2024: generateGallery(2024),
  2025: generateGallery(2025),
  2026: generateGallery(2026),
};

export const galleryYears = [
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
];