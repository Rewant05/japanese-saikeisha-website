import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

const projects = [
  { id: "mountain-kominka", title: "山間の古民家", location: "長野", year: "2023年", img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop" },
  { id: "tsukimi-house", title: "月見の家", location: "京都", year: "2022年", img: "https://images.unsplash.com/photo-1490100667990-4fced8021649?q=80&w=2073&auto=format&fit=crop" },
  { id: "mizuniwa-residence", title: "水庭の邸", location: "金沢", year: "2023年", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop" },
  { id: "suginami-machiya", title: "杉並の町家", location: "東京", year: "2021年", img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2053&auto=format&fit=crop" },
  { id: "yukiguni-house", title: "雪国の家", location: "新潟", year: "2024年", img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop" },
];

export default function ProjectsPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="再生事例" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index % 2 === 0 ? 0 : 0.2}>
              <Link href={`/projects/${project.id}`} className="group block">
                <div className="relative aspect-[4/3] bg-[var(--color-stone)]/10 overflow-hidden mb-6">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-end border-b border-[var(--color-stone)]/30 pb-4 group-hover:border-[var(--color-brass)] transition-colors duration-300">
                  <div>
                    <h3 className="font-serif text-2xl mb-1 text-[var(--foreground)]">{project.title}</h3>
                    <p className="font-sans text-xs tracking-widest text-[var(--foreground)]/60 uppercase"></p>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-xs tracking-widest text-[var(--color-brass)]">{project.location}</p>
                    <p className="font-sans text-xs text-[var(--foreground)]/40">{project.year}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
