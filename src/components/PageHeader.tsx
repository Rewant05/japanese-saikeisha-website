"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  jpTitle?: string;
}

export default function PageHeader({ title, subtitle, jpTitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 lg:px-12 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          {jpTitle && (
            <span className="block font-serif text-2xl md:text-3xl text-[var(--color-stone)] mb-4">
              {jpTitle}
            </span>
          )}
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-[var(--foreground)]">
            {title}
          </h1>
        </motion.div>
        
        {subtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 md:max-w-md border-l border-[var(--color-brass)] pl-6"
          >
            <p className="font-sans font-light text-sm md:text-base leading-relaxed text-[var(--foreground)]/70 uppercase tracking-widest">
              {subtitle}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
