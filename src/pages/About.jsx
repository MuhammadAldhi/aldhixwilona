import GlareHover from "../components/ui/GlareHover";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { ScrollArea } from "@/components/ui/scroll-area";

const TIMELINE_DATA = [
  { year: "2024", title: "Tahun Nol", tag: "Titik Mula", color: "text-blue-400", desc: "Semuanya bermula di tahun 2024. Kami di pertemukan dengan ketidak sengajaan. Pertemuan pertama yang canggung tidak pernah diduga. kita jadian tanpa gift tanpa kata tanggal 18 Okttober 2024 kita resmi berpacaran" },

  { year: "2025", title: "Membangun Dunia", tag: "Bertumbuh", color: "text-purple-400", desc: "Kita belajar kedewasaan. Mencintai bukan hanya memegang tangan saat senang, tapi tetap tinggal saat masalah datang. semua kebahagian yang kita alami datang di tahun ini, semua kenangan tebuat di tahun ini" },

  { year: "2026", title: "Masa Depan", tag: "Hari Ini", color: "text-pink-400", desc: "Januari 2026. Kamu tetap orang yang sama yang membuat jantungku berdegup kencang sejak hari pertama. kita akan bercinta selamanya sampai dipisahkan oleh tuhan." },
];

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen md:h-screen bg-[#0d0f14] overflow-hidden flex items-center justify-center py-20 md:py-0">
      {/* Bg Glow & Grid */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'www.w3.org\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")' }} />

      <ScrollFloat textClassName="text-white/10 text-[clamp(4rem,15vw,15rem)] leading-none" containerClassName="absolute inset-0 z-99 font-Vector flex items-center justify-center pointer-events-none uppercase">
        Our Story
      </ScrollFloat>

      <div className="relative z-10 px-6 cursor-target md:cursor-none">
        <GlareHover glareOpacity={0.15} className="cursor-none w-[350px] sm:w-[600px] md:w-[750px] h-[550px] rounded-[2.5rem] border border-white/10 bg-[#161922]/80 backdrop-blur-xl">
          <div className="absolute inset-0 p-8 flex flex-col italic uppercase text-white">
            <span className="font-bold">Our Story</span>
            <span className="text-[10px] tracking-[0.3em] opacity-50">2024-2026</span>
            <div className="h-1 w-12 bg-white mt-1 rounded-full" />
          </div>

          <ScrollArea className="h-[400px] w-full md:cursor-none mt-20 px-8 text-white">
            <div className="text-center mb-16 space-y-2">
              <h1 className="text-5xl md:text-6xl italic opacity-90 tracking-tighter serif">Satu Detik di 2024,</h1>
              <p className="text-slate-400 uppercase tracking-[0.2em] text-[10px]">Selamanya Sejak Itu</p>
            </div>

            <div className="relative space-y-20 pb-10">
              <div className="absolute left-0 md:left-1/2 w-[1px] h-full bg-white/10 -translate-x-1/2 hidden md:block" />
              {TIMELINE_DATA.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between gap-4 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-5/12 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <span className={`${item.color} text-[10px] font-bold tracking-widest uppercase`}>{item.tag}</span>
                    <h2 className="text-xl my-2 italic serif">{item.title}</h2>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full z-10" />
                  <div className="md:w-5/12 text-4xl font-black text-white/5">{item.year}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </GlareHover>
      </div>
    </section>
  );
}
