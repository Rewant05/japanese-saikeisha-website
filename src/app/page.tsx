import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Timeline from "@/components/Timeline";
import MaterialExplorer from "@/components/MaterialExplorer";
import NumberCounter from "@/components/NumberCounter";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background (simulated with CSS for now) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Traditional Japanese Architecture"
            fill
            className="object-cover object-center opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/30 via-transparent to-[var(--background)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-20">
          <ScrollReveal delay={0.2} direction="up">
            <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--color-brass)] mb-6 block">
              日本の生きた遺産を保護する
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl tracking-widest text-[var(--foreground)] mb-8 leading-tight">
              残すことは、<br className="md:hidden" />未来をつくること。
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.6} direction="up">
            <p className="font-sans font-light text-sm md:text-base leading-loose max-w-2xl text-[var(--foreground)]/80 mb-12">
              再景舎は、素材、比率、雰囲気、そして物語を現代の世代のために保存しながら、伝統的な日本家屋を修復します。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/projects"
                className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--color-brass)] transition-colors duration-300 font-sans tracking-widest text-sm uppercase flex items-center justify-center gap-2 group"
              >
                再生事例を見る
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300 font-sans tracking-widest text-sm uppercase flex items-center justify-center"
              >
                私たちについて
              </Link>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--foreground)] to-transparent"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-6 lg:px-12 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl tracking-widest">古さを消さない。</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans font-light text-lg md:text-xl leading-loose text-[var(--foreground)]/80 text-justify md:text-center">
              私たちは単に改修するのではなく、保存します。元の木材、伝統的な比率、既存の素材を尊重し、最新の断熱性と耐震性を慎重に統合します。内部空間と庭の関係は途切れることなく、その精神を消し去ることなく、現代の生活に遺産を適応させます。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Before/After Section */}
      <section className="py-24 bg-[var(--color-charcoal)] text-[var(--color-ivory)] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-serif text-3xl md:text-5xl tracking-widest mb-4">再生 Before / After</h2>
              <p className="font-sans font-light text-sm tracking-[0.2em] uppercase text-[var(--color-brass)]">修復の比較</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" // Placeholder for old house
              afterImage="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?q=80&w=2070&auto=format&fit=crop" // Placeholder for restored
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-40 px-6 lg:px-12 bg-[var(--background)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-5xl tracking-widest mb-4">再生の過程</h2>
              <p className="font-sans font-light text-sm tracking-[0.2em] uppercase text-[var(--color-stone)] mb-12">修復の過程</p>
            </ScrollReveal>
            <Timeline />
          </div>
          <div className="hidden lg:block relative h-full min-h-[600px]">
            {/* abstract architectural line drawing simulation */}
            <div className="absolute inset-0 border border-[var(--color-stone)]/20 rounded-t-full bg-gradient-to-t from-transparent to-[var(--color-stone)]/5"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3/4 bg-[var(--color-brass)]/50"></div>
            <div className="absolute bottom-1/4 left-1/4 right-1/4 h-px bg-[var(--color-stone)]/30"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[var(--foreground)]/5 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-5xl tracking-widest mb-4">再生事例</h2>
              <p className="font-sans font-light text-sm tracking-[0.2em] uppercase text-[var(--color-stone)]">厳選されたプロジェクト</p>
            </ScrollReveal>
            <Link href="/projects" className="hidden md:flex items-center gap-2 font-sans text-sm tracking-widest hover:text-[var(--color-brass)] transition-colors group">
              すべて見る <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "山間の古民家", en: "Mountain Kominka", img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop" },
              { title: "月見の家", en: "Tsukimi House", img: "https://images.unsplash.com/photo-1490100667990-4fced8021649?q=80&w=2073&auto=format&fit=crop" },
            ].map((project, i) => (
              <ScrollReveal key={project.en} delay={i * 0.2}>
                <Link href={`/projects/${project.en.toLowerCase().replace(" ", "-")}`} className="group block relative overflow-hidden bg-[var(--color-stone)]/10 aspect-square md:aspect-[4/5]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-2xl text-[var(--background)] mb-1">{project.title}</h3>
                    <p className="font-sans text-xs tracking-widest text-[var(--background)]/70 uppercase"></p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 md:hidden flex justify-center">
            <Link href="/projects" className="px-8 py-3 border border-[var(--foreground)] font-sans text-sm tracking-widest">
              すべて見る
            </Link>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 md:py-40 px-6 lg:px-12 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-5xl tracking-widest mb-4">素材と哲学</h2>
              <p className="font-sans font-light text-sm tracking-[0.2em] uppercase text-[var(--color-stone)]">素材を探索する</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <MaterialExplorer />
          </ScrollReveal>
        </div>
      </section>

      {/* Architecture Data Section */}
      <section className="py-24 bg-[var(--color-charcoal)] text-[var(--color-ivory)] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-y border-[var(--color-stone)]/30 py-16">
          <NumberCounter end={120} suffix="+" label="修復された家屋" />
          <NumberCounter end={38} label="職人歴（年）" />
          <NumberCounter end={17} label="提携職人" />
          <NumberCounter end={94} suffix="%" label="再利用された素材" />
        </div>
      </section>

      {/* Studio / Contact Intro */}
      <section className="py-24 md:py-40 px-6 lg:px-12 bg-[var(--background)] text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl tracking-widest leading-tight">
              建築ではなく、<br className="md:hidden" />暮らしを再生する。
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
              私たちのスタジオには、建築家、伝統的な職人、木工職人、保存の専門家が集まり、忘れられた建造物に新たな命を吹き込みます。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--color-brass)] transition-colors duration-300 font-sans tracking-widest text-sm uppercase"
            >
              古い家を、未来へ。
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
