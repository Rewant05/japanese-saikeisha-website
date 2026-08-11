import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="利用規約" />
      <div className="max-w-3xl mx-auto px-6 lg:px-12 pt-12">
        <ScrollReveal>
          <div className="prose prose-stone prose-invert max-w-none font-sans font-light text-[var(--foreground)]/80 leading-loose">
            <p>
              再景舎へようこそ。このウェブサイトにアクセスすることにより、これらの利用規約に同意したものとみなします。このページに記載されているすべての利用規約に同意しない場合は、再景舎の利用を継続しないでください。
            </p>
            <h3 className="text-[var(--foreground)] font-serif mt-8 mb-4 text-xl">知的財産権</h3>
            <p>
              お客様が所有するコンテンツを除き、本規約に基づき、再景舎および/またはそのライセンサーは、本ウェブサイトに含まれるすべての知的財産権および資料を所有します。お客様には、本ウェブサイトに含まれる資料を閲覧する目的に限り、限定的なライセンスが付与されます。
            </p>
            <h3 className="text-[var(--foreground)] font-serif mt-8 mb-4 text-xl">制限事項</h3>
            <p>
              お客様は、以下のすべての行為を明確に制限されています：
              <br />- クレジット表記なしに本ウェブサイトの資料を他のメディアで公開すること
              <br />- 本ウェブサイトの資料を販売、サブライセンス、および/またはその他の方法で商業化すること
              <br />- 本ウェブサイトに損害を与える、またはその恐れがある方法で本ウェブサイトを使用すること
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
