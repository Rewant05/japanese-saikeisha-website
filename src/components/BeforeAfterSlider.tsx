"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "修復前",
  afterAlt = "修復後",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col space-y-6">
      <div className="flex justify-between items-center text-sm font-sans tracking-widest text-[var(--color-stone)]">
        <span>改装前</span>
        <span>再生後</span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden cursor-ew-resize select-none bg-[var(--color-stone)]/20"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover object-center pointer-events-none"
            priority
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute top-0 bottom-0 left-0 h-full" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover object-center pointer-events-none"
            />
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-[var(--color-ivory)] cursor-ew-resize flex items-center justify-center shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-10 h-10 rounded-full bg-[var(--color-ivory)] text-[var(--color-charcoal)] flex items-center justify-center shadow-md">
            <ArrowLeftRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
