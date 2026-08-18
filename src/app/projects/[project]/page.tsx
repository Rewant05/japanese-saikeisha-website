import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { notFound } from "next/navigation";

const projectData: Record<string, {
  title: string;
  location: string;
  type: string;
  year: string;
  img: string;
  description: string;
}> = {
  "mountain-kominka": {
    title: "山間の古民家",
    location: "長野県",
    type: "古民家",
    year: "2023年",
    img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop",
    description: "標高800メートルの山間部に佇む築150年の古民家。豪雪地帯特有の太い梁と急勾配の屋根を持つこの建物は、長年の風雪により基礎と屋根に深刻な損傷を受けていました。私たちは元の栗材の梁をすべて保存しながら、基礎を現代の耐震基準に適合させ、床下に断熱材を敷設。囲炉裏のある居間を中心とした伝統的な間取りを活かしつつ、現代的なキッチンと浴室を違和感なく統合しました。",
  },
  "tsukimi-house": {
    title: "月見の家",
    location: "京都府",
    type: "町家",
    year: "2022年",
    img: "https://images.unsplash.com/photo-1490100667990-4fced8021649?q=80&w=2073&auto=format&fit=crop",
    description: "京都の東山に位置する築120年の町家。名前の由来となった月見台（月を眺めるための二階の縁側）が特徴的な建物です。通り庭と呼ばれる土間の通路、繊細な格子窓、そして奥庭との調和を大切に修復しました。土壁は伝統的な左官技術で丁寧に補修し、和紙を通して柔らかな光が差し込む空間を再現しています。",
  },
  "mizuniwa-residence": {
    title: "水庭の邸",
    location: "金沢市",
    type: "武家屋敷",
    year: "2023年",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    description: "金沢の武家屋敷跡地に建つ邸宅の修復プロジェクト。水庭と呼ばれる池泉回遊式庭園との一体感を重視し、建物と庭の境界を曖昧にする伝統的な設計手法を現代に蘇らせました。檜の柱と梁は磨き上げて再利用し、雪国特有の重厚な屋根構造を補強しつつ、室内には床暖房と最新の空調設備を導入しています。",
  },
  "suginami-machiya": {
    title: "杉並の町家",
    location: "東京都",
    type: "町家",
    year: "2021年",
    img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2053&auto=format&fit=crop",
    description: "東京の住宅地に残る希少な町家の修復。都市化の波に飲まれそうになっていたこの建物を、現代の住居として再生させました。狭い敷地を最大限に活かす伝統的な空間構成を尊重しながら、自然光を取り入れる工夫を随所に施しています。杉材の建具は一枚一枚手作業で修復し、新旧の素材が美しく調和する空間を実現しました。",
  },
  "yukiguni-house": {
    title: "雪国の家",
    location: "新潟県",
    type: "古民家",
    year: "2024年",
    img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop",
    description: "新潟の豪雪地帯に建つ築180年の農家住宅。毎年3メートルを超える積雪に耐えてきた堅牢な構造を活かしながら、現代の快適性を実現しました。黒光りする太い欅の大黒柱と曲がり梁は、この家の歴史を物語る宝物です。土間を広げてダイニングキッチンとし、かつての蚕室を開放的なリビングに転換。二重窓と高性能断熱材により、厳しい冬も暖かく過ごせる住まいに生まれ変わりました。",
  },
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  
  const data = projectData[project];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="w-full pb-24">
      <PageHeader title={data.title} />
      <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-24">
        
        <ScrollReveal>
          <div className="aspect-[16/9] w-full relative overflow-hidden mb-12">
            <Image
              src={data.img}
              alt={data.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              quality={80}
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-[var(--color-stone)]/30 py-12">
          <ScrollReveal delay={0.1}>
            <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-2">所在地</h4>
            <p className="font-serif text-lg">{data.location}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-2">建物の種類</h4>
            <p className="font-serif text-lg">{data.type}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-2">完成年</h4>
            <p className="font-serif text-lg">{data.year}</p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="max-w-3xl">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 tracking-widest">修復のアプローチ</h3>
            <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
