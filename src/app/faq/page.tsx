import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="よくあるご質問" jpTitle="ご案内" />
      <div className="max-w-3xl mx-auto px-6 lg:px-12 pt-12 space-y-12">
        {[
          { q: "一般的な修復プロジェクトにはどのくらいの期間がかかりますか？", a: "一般的な古民家の修復には、規模や構造の修復の程度により、通常8ヶ月から14ヶ月かかります。" },
          { q: "伝統的な日本家屋（古民家）のみを扱っていますか？", a: "私たちの専門は古民家や町家ですが、自然素材や職人技を重視し、現代の住宅プロジェクトや新しい建物の改修にも私たちの哲学を適用しています。" },
          { q: "修復された家はエネルギー効率を良くすることができますか？", a: "はい。私たちは通気性のある最新の断熱材と高性能な空調システムを慎重に統合し、伝統的な美しさを損なうことなく、一年中快適な家を保証します。" }
        ].map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="border-b border-[var(--color-stone)]/30 pb-8">
              <h3 className="font-serif text-xl mb-4 text-[var(--color-brass)]">{faq.q}</h3>
              <p className="font-sans font-light leading-relaxed text-[var(--foreground)]/80">{faq.a}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
