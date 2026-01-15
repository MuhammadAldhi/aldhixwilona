"use client";
import { useState } from "react";
import ScrollFloat from "@/components/ui/ScrollFloat";
import DomeGallery1 from '@/components/ui/DomeGallery1';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// IMPORT DATA DARI FILE TERPISAH
import { GaleryData, galleryYears } from "../assets/DataImg";

export default function Galery() {
  const [activeYear, setActiveYear] = useState("2024");

  return (
    <section className="relative w-full min-h-screen bg-[#0d0f14] overflow-hidden flex flex-col items-center justify-center py-20 md:py-0">
      <ScrollFloat
        textClassName="text-white/10 text-[clamp(3rem,15vw,15rem)] leading-none"
        containerClassName="absolute inset-0 z-99 font-Vector flex items-center justify-center pointer-events-none uppercase"
      >
        Our Memories
      </ScrollFloat>

      <div className="relative z-20 flex flex-col items-center w-full">
        <Tabs
          value={activeYear}
          onValueChange={setActiveYear}
          className="w-full flex flex-col items-center"
        >
          <TabsList className="bg-white/5 border border-white/10">
            {galleryYears.map((year) => (
              <TabsTrigger
                key={year.value}
                value={year.value}
                className="data-[state=active]:bg-white/10 text-white"
              >
                {year.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeYear} className="mt-5 outline-none cursor-target">
            <div className="relative px-6 md:cursor-none">
              <div className="w-[350px] sm:w-[600px] md:w-[750px] h-[550px] rounded-[2.5rem] border border-white/10 bg-[#161922]/80 backdrop-blur-xl flex flex-col text-white overflow-hidden">

                <div className="text-4xl pt-8 text-center font-Vector shrink-0">
                  our memories in {activeYear}
                </div>

                <div className="w-full h-full p-5">
                  <div className="w-full h-full overflow-hidden rounded-[2.5rem] relative">
                    <DomeGallery1
                      key={activeYear}
                      images={GaleryData[activeYear] || []}
                      fit={0.5}
                      minRadius={750}
                      dragDampening={2.6}
                      grayscale={false}
                    />
                  </div>
                </div>

              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
