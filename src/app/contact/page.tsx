import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="ご相談" jpTitle="古い家を、未来へ。" />
      <div className="max-w-3xl mx-auto px-6 lg:px-12 pt-12">
        <ScrollReveal>
          <form className="space-y-8 font-sans font-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm tracking-widest text-[var(--foreground)]/70">お名前</label>
                <input type="text" id="name" className="border-b border-[var(--color-stone)]/30 bg-transparent py-2 focus:outline-none focus:border-[var(--color-brass)] transition-colors" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm tracking-widest text-[var(--foreground)]/70">メールアドレス</label>
                <input type="email" id="email" className="border-b border-[var(--color-stone)]/30 bg-transparent py-2 focus:outline-none focus:border-[var(--color-brass)] transition-colors" />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="location" className="text-sm tracking-widest text-[var(--foreground)]/70">所在地</label>
              <input type="text" id="location" className="border-b border-[var(--color-stone)]/30 bg-transparent py-2 focus:outline-none focus:border-[var(--color-brass)] transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <label htmlFor="type" className="text-sm tracking-widest text-[var(--foreground)]/70">建物の種類</label>
                <select id="type" className="border-b border-[var(--color-stone)]/30 bg-transparent py-2 focus:outline-none focus:border-[var(--color-brass)] transition-colors rounded-none appearance-none">
                  <option value="kominka">古民家</option>
                  <option value="machiya">町家</option>
                  <option value="modern">現代建築</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="year" className="text-sm tracking-widest text-[var(--foreground)]/70">建築年</label>
                <input type="text" id="year" placeholder="例：1920年" className="border-b border-[var(--color-stone)]/30 bg-transparent py-2 focus:outline-none focus:border-[var(--color-brass)] transition-colors" />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm tracking-widest text-[var(--foreground)]/70">ご相談内容</label>
              <textarea id="message" rows={6} className="border-b border-[var(--color-stone)]/30 bg-transparent py-2 focus:outline-none focus:border-[var(--color-brass)] transition-colors resize-none"></textarea>
            </div>

            <button type="button" className="mt-8 px-12 py-4 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--color-brass)] transition-colors duration-300 tracking-widest uppercase text-sm w-full md:w-auto">
              送信する
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
