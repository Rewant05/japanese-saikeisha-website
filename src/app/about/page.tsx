import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="私たちについて" jpTitle="再景舎" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
        <ScrollReveal>
          <div className="aspect-[16/9] bg-[var(--color-stone)]/10 mb-12"></div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="font-serif text-3xl mb-6">Our Philosophy</h2>
          <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
            京都で設立された再景舎は、日本の建築遺産の保存に専念する建築家と伝統的な職人の集団です。私たちは、古い家屋にはその土地の記憶、忘れ去られた大工の技術、そして時の経過とともに生み出される古色が宿っていると信じています。私たちの使命は、これらの建造物を過去のものとして凍結するのではなく、未来に向けて思慮深く適応させることです。
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
