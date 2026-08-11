import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="プライバシーポリシー" />
      <div className="max-w-3xl mx-auto px-6 lg:px-12 pt-12">
        <ScrollReveal>
          <div className="prose prose-stone prose-invert max-w-none font-sans font-light text-[var(--foreground)]/80 leading-loose">
            <p>
              再景舎（「私たち」、「当社の」）はお客様のプライバシーの保護に努めています。このプライバシーポリシーは、お客様の個人情報が再景舎によってどのように収集、使用、開示されるかを説明するものです。
            </p>
            <h3 className="text-[var(--foreground)] font-serif mt-8 mb-4 text-xl">収集する情報</h3>
            <p>
              当社のウェブサイトを訪問したり、ご相談を依頼したり、お問い合わせいただいた際に情報を収集します。これには、お客様の氏名、メールアドレス、物件の所在地、プロジェクトの詳細が含まれる場合があります。
            </p>
            <h3 className="text-[var(--foreground)] font-serif mt-8 mb-4 text-xl">情報の利用目的</h3>
            <p>
              収集した情報は、以下のいずれかの方法で使用される場合があります：
              <br />- お客様の体験をパーソナライズし、個別のニーズに応えるため
              <br />- 当社のウェブサイトおよびコンサルティングサービスを改善するため
              <br />- プロジェクトやお問い合わせに関する定期的なメールを送信するため
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
