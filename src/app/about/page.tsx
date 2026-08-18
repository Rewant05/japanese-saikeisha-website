import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import NumberCounter from "@/components/NumberCounter";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="私たちについて" jpTitle="再景舎" subtitle="日本の建築遺産を未来へつなぐ" />

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
        <ScrollReveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="再景舎のスタジオ"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              quality={80}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 to-transparent" />
          </div>
        </ScrollReveal>
      </div>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24 space-y-8">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl tracking-widest mb-8">私たちの物語</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
            京都で設立された再景舎は、日本の建築遺産の保存に専念する建築家と伝統的な職人の集団です。私たちは、古い家屋にはその土地の記憶、忘れ去られた大工の技術、そして時の経過とともに生み出される古色が宿っていると信じています。私たちの使命は、これらの建造物を過去のものとして凍結するのではなく、未来に向けて思慮深く適応させることです。
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
            2005年の創業以来、私たちは120軒以上の伝統的な日本家屋を修復してきました。古民家、町家、武家屋敷——それぞれの建物が持つ固有の物語を読み解き、現代の暮らしに寄り添う形で再生させることが、私たちの仕事です。
          </p>
        </ScrollReveal>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[var(--foreground)]/5 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest mb-4 text-center">三つの柱</h2>
            <p className="font-sans font-light text-sm tracking-[0.2em] uppercase text-[var(--color-stone)] text-center mb-16">私たちの理念を支える価値観</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "保存",
                subtitle: "過去を守る",
                desc: "元の木材、伝統的な比率、既存の素材を最大限に尊重します。一本の柱、一枚の建具にも、代えがたい歴史が刻まれています。",
                img: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=2006&auto=format&fit=crop",
              },
              {
                title: "共生",
                subtitle: "自然と暮らす",
                desc: "内部空間と庭の関係を途切れることなく保ち、四季の移ろいを感じられる住まいを実現します。建築と自然の調和こそが日本家屋の真髄です。",
                img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "継承",
                subtitle: "未来につなぐ",
                desc: "最新の断熱技術と耐震補強を施し、次の百年を見据えた修復を行います。伝統を守りながら、現代の快適さを実現します。",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="group">
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[var(--color-stone)]/10">
                    <Image
                      src={value.img}
                      alt={value.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      quality={75}
                    />
                  </div>
                  <h3 className="font-serif text-3xl tracking-widest mb-2">{value.title}</h3>
                  <p className="font-sans text-sm tracking-widest text-[var(--color-brass)] mb-4">{value.subtitle}</p>
                  <p className="font-sans font-light leading-relaxed text-[var(--foreground)]/70">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[var(--color-charcoal)] text-[var(--color-ivory)] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-y border-[var(--color-stone)]/30 py-16">
          <NumberCounter end={120} suffix="+" label="修復された家屋" />
          <NumberCounter end={38} label="職人歴（年）" />
          <NumberCounter end={17} label="提携職人" />
          <NumberCounter end={94} suffix="%" label="再利用された素材" />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest mb-4">私たちのチーム</h2>
            <p className="font-sans font-light text-sm tracking-[0.2em] uppercase text-[var(--color-stone)] mb-16">伝統と革新を融合する職人たち</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "田中 隆", role: "主任建築家", desc: "京都大学建築学科卒業。伝統建築の保存と現代生活の融合を専門とし、20年以上の経験を持つ。", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
              { name: "佐藤 浩", role: "棟梁", desc: "三代続く宮大工の家系に生まれ、伝統的な木組み技術を継承。手道具のみで精密な仕口を刻む技を持つ。", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
              { name: "中村 有紀", role: "保存スペシャリスト", desc: "文化財修復の専門家。古建築の調査・記録から修復計画の策定まで、保存の全工程を統括する。", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.2}>
                <div className="group">
                  <div className="relative aspect-square mb-6 overflow-hidden bg-[var(--color-stone)]/10">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      quality={75}
                    />
                  </div>
                  <h4 className="font-serif text-xl mb-1">{member.name}</h4>
                  <p className="font-sans text-xs tracking-widest text-[var(--color-brass)] mb-3">{member.role}</p>
                  <p className="font-sans font-light text-sm leading-relaxed text-[var(--foreground)]/70">{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-[var(--foreground)]/5 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest mb-16">沿革</h2>
          </ScrollReveal>

          <div className="space-y-12 border-l border-[var(--color-stone)]/30 pl-8 md:pl-16 ml-4 md:ml-8">
            {[
              { year: "2005年", event: "京都にて再景舎を設立。最初の古民家修復プロジェクトに着手。" },
              { year: "2010年", event: "修復実績が50軒を超え、金沢にサテライトオフィスを開設。" },
              { year: "2015年", event: "東京進出。都市部における町家保存プロジェクトを開始。" },
              { year: "2020年", event: "次世代の職人育成プログラム「匠塾」を開講。" },
              { year: "2024年", event: "修復実績120軒突破。持続可能な建築保存のモデルケースとして国際的な注目を集める。" },
            ].map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[41px] md:-left-[73px] top-1 w-3 h-3 rounded-full bg-[var(--color-brass)]" />
                  <p className="font-serif text-xl text-[var(--color-brass)] mb-2">{item.year}</p>
                  <p className="font-sans font-light leading-relaxed text-[var(--foreground)]/80">{item.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 px-6 lg:px-12 bg-[var(--background)] text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest leading-tight">
              あなたの家の物語を、<br className="md:hidden" />一緒に紡ぎませんか。
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
              修復のご相談、見学のご希望など、お気軽にお問い合わせください。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-12 py-5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--color-brass)] transition-colors duration-300 font-sans tracking-widest text-sm uppercase group"
            >
              ご相談はこちら
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
