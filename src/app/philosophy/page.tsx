import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function PhilosophyPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="古さを消さない。" jpTitle="哲学" />
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-12 space-y-24">
        
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] relative bg-[var(--color-stone)]/10">
              <Image 
                src="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=2006&auto=format&fit=crop" 
                alt="伝統的な木組み" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl">骨組みの尊重</h3>
              <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
                伝統的な日本家屋は解体して再構築できるように設計されています。私たちはこの本来の意図を尊重します。解体を始める前に、すべての継手と梁を綿密にマッピングします。たとえ経年劣化の兆候が見られても、この古色はかけがえのないものであるため、既存の木材を再利用するよう努めています。
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center flex-col-reverse md:flex-row-reverse">
            <div className="aspect-[3/4] relative bg-[var(--color-stone)]/10 md:col-start-2">
              <Image 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="現代との融合" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="space-y-6 md:col-start-1 md:row-start-1">
              <h3 className="font-serif text-3xl">見えない近代性</h3>
              <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
                過去を敬いますが、家は現在に役立つものでなければなりません。私たちは高性能な断熱材、床暖房、最新の耐震補強を、目に見えない形で導入します。伝統的な美しさは保たれますが、快適さは完全に現代的です。
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
