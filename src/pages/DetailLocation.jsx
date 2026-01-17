import ScrollFloat from "../components/ui/ScrollFloat"

const DetailLokasi = () => {
  const lokasi = {
    jalan: "Beting Indah No. 22",
    rt: "16",
    rw: "09",
    kelurahan: "Semper Barat",
    kecamatan: "Cilincing",
    kota: "Jakarta Utara",
    provinsi: "DKI Jakarta",
  };

  const embedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d308.9731603077466!2d106.92152510789703!3d-6.121560225888603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1768632463136!5m2!1sid!2sid";

  const shareUrl = "https://maps.app.goo.gl/cmpbMf1TfLBFmfcy7";

  return (
    // Background gelap sesuai tema HomePage

    <section className="relative w-full min-h-screen md:h-screen bg-[#0d0f14] overflow-hidden flex items-center justify-center py-20 md:py-0 px-4">

      {/* PERBAIKAN: Container ScrollFloat */}
      <div className="absolute inset-0 z-99 pointer-events-none flex items-center justify-center">
        <ScrollFloat
          textClassName="text-white/[0.03] text-[clamp(4rem,18vw,20rem)] leading-none font-Vector uppercase"
          containerClassName="w-full h-full flex items-center justify-center"
        >
          Location
        </ScrollFloat>
      </div>
      {/* Container utama dengan background gelap dan border effect */}
      <div className="max-w-6xl w-full bg-[#1a1f2c] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-cyan-400/20">

        {/* Bagian Kiri: Google Maps */}
        <div className="w-full md:w-3/5 h-80 md:h-[500px] cursor-target">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0 filter grayscale invert"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Beting Indah"
          ></iframe>
        </div>

        {/* Bagian Kanan: Detail Alamat (Styling gelap dan aksen cyan) */}
        <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center cursor-target">

          <h2 className="text-3xl font-extrabold text-white mb-6 border-b-4 border-cyan-500/50 pb-3">
            Detail Lokasi
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4 cursor-target">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">Alamat Lengkap</p>
              <p className="text-lg text-white font-medium">{lokasi.jalan}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-gray-700 pb-4">
              {/* Menggunakan ElectricBorder untuk efek glow pada info RT/RW */}

              <div className="bg-cyan-900/20 p-3 rounded-lg cursor-target">
                <p className="text-xs font-semibold uppercase text-cyan-400">RT</p>
                <p className="text-2xl font-bold text-white">{lokasi.rt}</p>
              </div>


              <div className="bg-cyan-900/20 p-3 rounded-lg cursor-target">
                <p className="text-xs font-semibold uppercase text-cyan-400">RW</p>
                <p className="text-2xl font-bold text-white">{lokasi.rw}</p>
              </div>

            </div>

            <div className="pt-2 cursor-target">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">Wilayah</p>
              <p className="text-gray-300">{lokasi.kelurahan}, {lokasi.kecamatan}</p>
              <p className="text-white font-semibold">{lokasi.kota}, {lokasi.provinsi}</p>
            </div>
          </div>

          {/* Tombol dengan gaya neon/glow */}
          <div className="mt-10 cursor-target">
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-[#0d0f14] font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg shadow-cyan-500/50 transform hover:scale-105"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailLokasi;
