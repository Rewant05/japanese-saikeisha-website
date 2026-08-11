"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const timelineSteps = [
  { id: "01", jp: "調査", en: "Survey", desc: "既存の骨組みの構造的完全性と歴史的意義を評価します。" },
  { id: "02", jp: "記録", en: "Document", desc: "介入前の詳細な建築マッピングと素材のカタログ化。" },
  { id: "03", jp: "解体", en: "Careful Deconstruction", desc: "中核となる木材を保存しながら、非構造的または劣化した要素を解体します。" },
  { id: "04", jp: "再生", en: "Restoration", desc: "多くの場合、伝統的な継手の技術を使用して、元の木材を処理および修理します。" },
  { id: "05", jp: "再構築", en: "Reconstruction", desc: "最新の断熱材と耐震補強を施して構造を再構築します。" },
  { id: "06", jp: "暮らし", en: "Modern Living", desc: "現代の設備を伝統的な美学にシームレスに統合します。" },
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="relative border-l border-[var(--color-stone)]/30 ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
        {timelineSteps.map((step, index) => (
          <ScrollReveal key={step.id} delay={index * 0.1} direction="up">
            <div className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-4 h-4 rounded-full bg-[var(--background)] border border-[var(--color-stone)] group-hover:border-[var(--color-brass)] group-hover:bg-[var(--color-brass)] transition-colors duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                <span className="font-serif text-3xl md:text-5xl text-[var(--color-stone)]/40 font-light tracking-tighter">
                  {step.id}
                </span>
                <h3 className="font-serif text-2xl tracking-widest text-[var(--foreground)] flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span>{step.jp}</span>
                </h3>
              </div>
              <p className="font-sans font-light leading-relaxed text-[var(--foreground)]/70 max-w-lg">
                {step.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
