"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const PricingInfographic = () => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null)

  const Icon = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
      domain: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      ecommerce: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      analytics: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      branding: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      email: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    }
    return icons[type]
  }

  const tiers = [
    {
      id: "basic",
      name: "Advertised: $16/mo",
      price: "$16",
      coinCount: 1,
      gradient: "from-gray-200 to-gray-300",
      border: "border-gray-400",
      coinGradient: "from-gray-400 to-gray-500",
      coinBorder: "border-gray-600",
      textColor: "text-gray-600",
      priceColor: "text-gray-500",
      features: [
        { icon: "domain", text: "Custom Domain", unlocked: false },
        { icon: "ecommerce", text: "E-commerce", unlocked: false },
        { icon: "analytics", text: "Analytics", unlocked: false },
        { icon: "branding", text: "Remove Branding", unlocked: false },
        { icon: "email", text: "Professional Email", unlocked: false },
      ],
    },
    {
      id: "business",
      name: "Business",
      price: "$49",
      coinCount: 3,
      gradient: "from-orange-50 to-orange-100",
      border: "border-orange-400",
      coinGradient: "from-orange-400 to-orange-500",
      coinBorder: "border-orange-600",
      textColor: "text-gray-700",
      priceColor: "text-orange-900",
      features: [
        { icon: "domain", text: "Custom Domain", unlocked: true },
        { icon: "ecommerce", text: "E-commerce", unlocked: true },
        { icon: "analytics", text: "Advanced Analytics", unlocked: false },
        { icon: "branding", text: "Remove Branding", unlocked: false },
        { icon: "email", text: "Professional Email", unlocked: false },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: "$99",
      coinCount: 6,
      gradient: "from-yellow-300 to-yellow-400",
      border: "border-yellow-600",
      coinGradient: "from-yellow-400 to-yellow-500",
      coinBorder: "border-yellow-700",
      textColor: "text-yellow-900",
      priceColor: "text-yellow-900",
      shadow: "shadow-[0_8px_20px_rgba(212,175,55,0.3)]",
      features: [
        { icon: "domain", text: "Custom Domain", unlocked: true },
        { icon: "ecommerce", text: "E-commerce", unlocked: true },
        { icon: "analytics", text: "Advanced Analytics", unlocked: true },
        { icon: "branding", text: "Remove Branding", unlocked: true },
        { icon: "email", text: "Professional Email", unlocked: true },
      ],
      hasBubble: true,
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto p-10 bg-white rounded-3xl shadow-2xl">
      <motion.h1
        className="text-center text-3xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Real Cost of "Affordable" Plans
      </motion.h1>

      <div className="flex flex-col gap-5 relative">
        {tiers.map((tier, tierIndex) => (
          <motion.div
            key={tier.id}
            className={`relative rounded-2xl p-6 border-2 bg-gradient-to-br ${tier.gradient} ${tier.border} ${tier.shadow || ""} cursor-pointer transition-all duration-300`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: tierIndex * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow:
                tier.id === "premium" ? "0 12px 30px rgba(212, 175, 55, 0.4)" : "0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
            onHoverStart={() => setHoveredTier(tier.id)}
            onHoverEnd={() => setHoveredTier(null)}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-semibold uppercase tracking-wider ${tier.textColor}`}>{tier.name}</span>
            </div>

            <motion.div
              className={`text-4xl font-extrabold ${tier.priceColor} mb-4`}
              animate={{ scale: hoveredTier === tier.id ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {tier.price}
              <span className="text-lg">/mo</span>
            </motion.div>

            <div className="flex gap-1 mb-4">
              {[...Array(tier.coinCount)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${tier.coinGradient} border-2 ${tier.coinBorder} flex items-center justify-center text-xs font-bold text-yellow-900`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: tierIndex * 0.15 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                >
                  $
                </motion.div>
              ))}
            </div>

            <ul className="flex flex-col gap-2.5">
              {tier.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  className={`flex items-center gap-2.5 text-sm ${
                    feature.unlocked ? "text-green-700 font-medium" : "text-gray-500 line-through opacity-50"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: tierIndex * 0.15 + featureIndex * 0.05,
                  }}
                  whileHover={{
                    x: feature.unlocked ? 5 : 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Icon type={feature.icon} />
                  {feature.text} {feature.unlocked && "✓"}
                </motion.li>
              ))}
            </ul>

            {tier.hasBubble && (
              <motion.div
                className="absolute -right-36 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap shadow-lg z-10"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-red-500" />
                What you actually need
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center text-xs text-gray-500 mt-5 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        The "affordable" plan that only unlocks basic features
      </motion.div>
    </div>
  )
}

export default PricingInfographic
