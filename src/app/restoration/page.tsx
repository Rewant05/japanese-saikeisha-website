import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Timeline from "@/components/Timeline";

export default function RestorationPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="再生の過程" jpTitle="残す技術" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-12 space-y-24">
        <ScrollReveal>
          <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80">
            真の修復とは、単に壊れたものを直すことではありません。それは元の建築家との対話であり、彼らの意図を理解し、次の1世紀に向けて建物を慎重に適応させることです。私たちは伝統的な職人技と現代の構造工学の両方を活用しています。
          </p>
        </ScrollReveal>

        <Timeline />
      </div>
    </div>
  );
}
