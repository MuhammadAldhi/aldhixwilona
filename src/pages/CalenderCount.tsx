// @ts-ignore

"use client";
import * as React from "react";
import { type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

import  ScrollFloat  from "@/components/ui/ScrollFloat";

export default function CalenderCount() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(2026, 1, 9),
  });

  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    if (!dateRange?.to) return;
    const targetDate = new Date(dateRange.to).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dateRange?.to]);

  return (
    <section className="relative w-full min-h-screen md:h-screen bg-[#0d0f14] overflow-hidden flex items-center justify-center py-20 md:py-0">

      <ScrollFloat
        textClassName="text-white/10 text-[clamp(4rem,15vw,15rem)] leading-none"
        containerClassName="absolute inset-0 z-99 font-Vector flex items-center justify-center pointer-events-none uppercase"
      >
        To BirthDay
      </ScrollFloat>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full max-w-6xl">
        {/* Sisi Countdown - Tampil DI ATAS pada Mobile (order-1), DI KANAN pada Desktop (order-2) */}
        <div className="order-1 lg:order-2 lg:col-span-2 flex flex-col items-center justify-center p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm shadow-2xl ">
          <div className="mb-8 text-center ">
            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-2">
              countdown to the birthDay
            </h2>
            <p className="text-zinc-400 text-xs italic">
              {dateRange?.to
                ? dateRange.to.toLocaleDateString("id-ID", {
                    dateStyle: "full",
                  })
                : "Pilih tanggal"}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 lg:gap-4">
            <TimeUnit
              value={timeLeft.days}
              label="Hari"
              color="text-blue-400"
            />
            <TimeUnit
              value={timeLeft.hours}
              label="Jam"
              color="text-purple-400"
            />
            <TimeUnit
              value={timeLeft.minutes}
              label="Menit"
              color="text-emerald-400"
            />
            <TimeUnit
              value={timeLeft.seconds}
              label="Detik"
              color="text-rose-400"
            />
          </div>

          <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </div>

        {/* Sisi Kalender - Tampil DI BAWAH pada Mobile (order-2), DI KIRI pada Desktop (order-1) */}
        <div className="order-2 lg:order-1 lg:col-span-3 flex justify-center p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 shadow-inner">
          <Calendar
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            disabled={true}
            numberOfMonths={
              typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2
            }
            className="rounded-xl bg-zinc-900/50 p-4 text-white cursor-target lg:p-6 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function TimeUnit({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center group">

      <div className="relative overflow-hidden bg-black/60 w-16 h-20 lg:w-20 lg:h-24 flex items-center justify-center rounded-2xl border border-zinc-800 transition-all duration-300 group-hover:border-zinc-600 shadow-xl cursor-target">
        {/* Efek kilau di atas angka */}
        <div className="absolute inset-0 cursor-targetbg-gradient-to-b cursor-target from-white/5 to-transparent pointer-events-none" />
        <span
          className={`text-3xl lg:text-4xl font-black font-mono tracking-tighter ${color}`}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] lg:text-xs mt-3  uppercase tracking-widest text-zinc-500 font-bold">
        {label}
      </span>
    </div>
  );
}
