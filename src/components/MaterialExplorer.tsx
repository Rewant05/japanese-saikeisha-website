"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const materials = [
  {
    id: "cedar",
    jp: "杉",
    en: "Cedar",
    origin: "Yoshino, Nara",
    philosophy: "まっすぐな木目と温かみのある色合いが評価され、何十年にもわたって優雅に経年変化します。",
    color: "bg-[var(--color-terracotta)]/20",
  },
  {
    id: "hinoki",
    jp: "檜",
    en: "Hinoki",
    origin: "Kiso, Nagano",
    philosophy: "強度、耐久性、そして特有の落ち着く香りで知られる神聖な木材。",
    color: "bg-[var(--color-wood)]/20",
  },
  {
    id: "earthen-wall",
    jp: "土壁",
    en: "Earthen Wall",
    origin: "Local Clay",
    philosophy: "季節とともに呼吸し、自然な湿度調整と断熱性を提供します。",
    color: "bg-[var(--color-stone)]/20",
  },
  {
    id: "tatami",
    jp: "畳",
    en: "Tatami",
    origin: "Kumamoto",
    philosophy: "室内を落ち着かせるい草の織物で、柔らかく香り高い基盤を提供します。",
    color: "bg-[var(--color-moss)]/20",
  },
  {
    id: "washi",
    jp: "和紙",
    en: "Washi",
    origin: "Mino, Gifu",
    philosophy: "障子を通して強烈な日光を拡散させ、柔らかく光り輝く照明に変えます。",
    color: "bg-[var(--color-ivory)]",
  },
  {
    id: "stone",
    jp: "石",
    en: "Natural Stone",
    origin: "Aji, Kagawa",
    philosophy: "構造を固定し、建築を大地と庭に結びつけます。",
    color: "bg-[var(--color-charcoal)]/10",
  },
];

export default function MaterialExplorer() {
  const [activeId, setActiveId] = useState(materials[0].id);

  const activeMaterial = materials.find((m) => m.id === activeId) || materials[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div className="flex flex-col space-y-4">
        {materials.map((mat) => (
          <button
            key={mat.id}
            onClick={() => setActiveId(mat.id)}
            className={clsx(
              "text-left py-4 px-6 border-l-2 transition-all duration-300",
              activeId === mat.id
                ? "border-[var(--color-brass)] bg-[var(--foreground)]/5"
                : "border-transparent hover:border-[var(--color-stone)]/30 hover:bg-[var(--foreground)]/5"
            )}
          >
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-[var(--foreground)]">{mat.jp}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="relative h-96 w-full flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMaterial.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={clsx(
              "absolute inset-0 border border-[var(--color-stone)]/20 flex flex-col justify-between p-8",
              activeMaterial.color
            )}
          >
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/50 mb-2">
                産地
              </p>
              <p className="font-serif text-lg">{activeMaterial.origin}</p>
            </div>

            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/50 mb-4">
                哲学
              </p>
              <p className="font-serif text-xl leading-relaxed">
                {activeMaterial.philosophy}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
