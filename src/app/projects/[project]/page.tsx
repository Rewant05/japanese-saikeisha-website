import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default async function ProjectDetailPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  
  // Transform slug back to readable name for placeholder
  const formattedName = project.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="w-full pb-24">
      <PageHeader title={formattedName} />
      <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-24">
        
        <ScrollReveal>
          <div className="aspect-[16/9] w-full bg-[var(--color-stone)]/10 mb-12"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-[var(--color-stone)]/30 py-12">
          <ScrollReveal delay={0.1}>
            <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-2">所在地</h4>
            <p className="font-serif text-lg">京都府</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-2">建物の種類</h4>
            <p className="font-serif text-lg">町家</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-2">完成年</h4>
            <p className="font-serif text-lg">2023年</p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="max-w-3xl">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 tracking-widest">修復のアプローチ</h3>
            <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
              目標は、自然光を最大限に取り入れるモダンなレイアウトを導入しながら、歴史的なファサードを保存することでした。オリジナルの杉の梁は慎重に清掃されて露出され、現代的なミニマリストの仕上げと見事なコントラストを生み出しています。
            </p>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
