import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function StudioPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="スタジオ" jpTitle="私たちのチーム" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 space-y-24">
        
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
              再景舎は単なる建築事務所ではなく、協力的なエコシステムです。私たちの建築家コアチームは、棟梁（大工）から左官まで、信頼できる地域の職人ネットワークと密接に連携し、すべてのプロジェクトが何世代にもわたる専門知識の恩恵を受けられるようにしています。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "田中 隆", role: "主任建築家", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
            { name: "佐藤 浩", role: "棟梁", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
            { name: "中村 有紀", role: "保存スペシャリスト", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
          ].map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.2}>
              <div className="group">
                <div className="relative aspect-square mb-4 overflow-hidden bg-[var(--color-stone)]/10">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="font-serif text-xl">{member.name}</h4>
                <p className="font-sans text-xs tracking-widest text-[var(--foreground)]/50 uppercase mt-1">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
