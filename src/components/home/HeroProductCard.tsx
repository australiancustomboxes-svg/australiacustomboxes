import React from "react";

export interface HeroProductItem {
  id: string;
  name: string;
  image: string;
  category?: string;
  badge?: string;
}

interface HeroProductCardProps {
  product: HeroProductItem;
}

/**
 * HeroProductCard - Photographic Custom Packaging Box Card
 * Exact Figma specifications:
 * - Width: 330.78px
 * - Height: 303.65px
 * - Border radius: rounded-[8px]
 * - Overflow: hidden
 * - High-resolution WebP mockups
 * - Smooth hover scale and gold glow
 */
export const HeroProductCard: React.FC<HeroProductCardProps> = ({ product }) => {
  return (
    <div
      className="w-[330.78px] h-[303.65px] rounded-[8px] relative overflow-hidden shrink-0 bg-[#041F49]/40 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.38)] border border-white/10 select-none group transition-all duration-300 hover:shadow-[0_18px_36px_-6px_rgba(242,179,41,0.45)] hover:border-[#F2B329]/60"
      style={{
        width: "330.78px",
        height: "303.65px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width={331}
        height={304}
        loading="eager"
        decoding="async"
        className="w-full h-full object-cover rounded-[8px] transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
      />
    </div>
  );
};

export default HeroProductCard;
