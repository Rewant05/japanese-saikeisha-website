import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] py-16 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Link href="/" className="font-serif text-3xl tracking-widest block">
            再景舎
          </Link>
          <p className="text-[var(--color-ivory)]/70 max-w-sm font-sans font-light leading-relaxed">
            日本の生きた遺産を保護する。伝統的な日本家屋の本来の個性を保ちながら、現代の生活に合わせて修復します。
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg tracking-widest mb-6">探求する</h4>
          <ul className="space-y-3 font-sans font-light text-[var(--color-ivory)]/70">
            <li><Link href="/projects" className="hover:text-[var(--color-brass)] transition-colors">プロジェクト</Link></li>
            <li><Link href="/restoration" className="hover:text-[var(--color-brass)] transition-colors">修復</Link></li>
            <li><Link href="/materials" className="hover:text-[var(--color-brass)] transition-colors">素材</Link></li>
            <li><Link href="/philosophy" className="hover:text-[var(--color-brass)] transition-colors">理念</Link></li>
            <li><Link href="/studio" className="hover:text-[var(--color-brass)] transition-colors">スタジオ</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg tracking-widest mb-6">情報</h4>
          <ul className="space-y-3 font-sans font-light text-[var(--color-ivory)]/70">
            <li><Link href="/contact" className="hover:text-[var(--color-brass)] transition-colors">お問い合わせ</Link></li>
            <li><Link href="/faq" className="hover:text-[var(--color-brass)] transition-colors">よくある質問</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[var(--color-brass)] transition-colors">プライバシーポリシー</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-[var(--color-brass)] transition-colors">利用規約</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--color-ivory)]/10 flex flex-col md:flex-row justify-between items-center font-sans font-light text-sm text-[var(--color-ivory)]/50">
        <p>&copy; {new Date().getFullYear()} 再景舎. 無断転載を禁じます。</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <span>京都</span>
          <span>東京</span>
          <span>金沢</span>
        </div>
      </div>
    </footer>
  );
}
