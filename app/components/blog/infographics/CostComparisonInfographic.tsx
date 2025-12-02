"use client"

import type React from "react"
import { useState } from "react"
import { TrendingDown, TrendingUp, AlertCircle, CheckCircle2, Sparkles } from "lucide-react"

interface CostComparisonProps {
  isVisible: boolean
  data?: Record<string, any>
  layout?: "horizontal" | "vertical"
}

const CostComparisonInfographic: React.FC<CostComparisonProps> = ({ isVisible, data = {}, layout = "horizontal" }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const diyItems = [
    { id: "subscription", label: "Base Subscription", amount: "$1,440", badge: "Monthly" },
    { id: "addons", label: "Premium Add-ons", amount: "$1,800", badge: "Required" },
    { id: "fees", label: "Transaction Fees", amount: "$6,000", badge: "Hidden" },
    { id: "time", label: "Your Time Investment", amount: "$10,000", badge: "Opportunity" },
    { id: "seo", label: "Lost SEO Revenue", amount: "$15,000+", badge: "Ongoing" },
    { id: "migration", label: "Future Migration Cost", amount: "$5,000", badge: "Inevitable" },
  ]

  const proItems = [
    { id: "dev", label: "Professional Development", amount: "$5,000-$8,000" },
    { id: "hosting", label: "Premium Hosting", amount: "$900" },
    { id: "maintenance", label: "Annual Maintenance", amount: "$3,600" },
  ]

  const CostItem = ({
    id,
    label,
    amount,
    badge,
    index,
    isDiy,
  }: {
    id: string
    label: string
    amount: string
    badge?: string
    index?: number
    isDiy?: boolean
  }) => {
    const isHovered = hoveredItem === id

    return (
      <div
        key={id}
        onMouseEnter={() => setHoveredItem(id)}
        onMouseLeave={() => setHoveredItem(null)}
        className={`group relative rounded-xl border transition-all duration-300 ${
          isHovered ? "scale-[1.02] shadow-lg z-10" : "hover:scale-[1.01]"
        } ${
          isDiy
            ? "bg-red-50 border-red-200 hover:border-red-300"
            : "bg-emerald-50 border-emerald-200 hover:border-emerald-300"
        }`}
      >
        <div className="p-5 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            {isDiy ? (
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            )}
            <span className="text-sm font-medium text-slate-800 leading-tight">{label}</span>
          </div>
          <span className={`text-lg font-bold tabular-nums ${isDiy ? "text-red-600" : "text-emerald-600"}`}>
            {amount}
          </span>
        </div>
        {badge && (
          <div
            className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
              isDiy ? "bg-red-500 text-white" : "bg-emerald-500 text-white"
            }`}
          >
            {badge}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
        {/* DIY Column */}
        <div
          className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="bg-white rounded-3xl p-8 border-2 border-red-100 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-black text-red-600 mb-1">DIY Builder</h3>
                <p className="text-slate-600 font-medium">"Affordable" option</p>
              </div>
              <TrendingUp className="w-10 h-10 text-red-400" />
            </div>

            <div className="space-y-3 mb-8">
              {diyItems.map((item, index) => (
                <CostItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  amount={item.amount}
                  badge={item.badge}
                  index={index}
                  isDiy={true}
                />
              ))}
            </div>

            {/* DIY Total */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-8 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-300/20 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold uppercase tracking-wider text-red-100">Year 1 Total</div>
                  <div className="px-3 py-1 rounded-lg bg-red-700/50">
                    <span className="text-xs font-bold text-red-100">Recurring</span>
                  </div>
                </div>
                <div className="text-6xl font-black text-white mb-2 tabular-nums">
                  $40,740<span className="text-3xl">+</span>
                </div>
                <div className="text-base font-semibold text-red-100">Plus ongoing fees forever</div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Column */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-100 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-black text-emerald-600 mb-1">Professional</h3>
                <p className="text-slate-600 font-medium">One-time investment</p>
              </div>
              <TrendingDown className="w-10 h-10 text-emerald-400" />
            </div>

            <div className="space-y-3 mb-8">
              {proItems.map((item) => (
                <CostItem key={item.id} id={item.id} label={item.label} amount={item.amount} isDiy={false} />
              ))}
            </div>

            {/* Professional Total */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold uppercase tracking-wider text-emerald-100">Year 1 Total</div>
                  <div className="px-3 py-1 rounded-lg bg-emerald-700/50">
                    <span className="text-xs font-bold text-emerald-100">One-time</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-6xl font-black text-white tabular-nums">$9,500</div>
                  <div className="text-3xl font-black text-emerald-100">- $12,500</div>
                </div>
                <div className="text-base font-semibold text-emerald-100">You own it forever</div>
              </div>
            </div>
          </div>
        </div>

        {/* VS Badge - Desktop */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-slate-300 items-center justify-center shadow-lg z-20">
          <span className="text-2xl font-black text-slate-800">VS</span>
        </div>
      </div>

      {/* Savings Badge */}
      <div
        className={`mt-12 mx-auto max-w-md transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 p-8 shadow-lg">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-white" />
              <div className="text-sm font-bold uppercase tracking-widest text-white">You Save</div>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-6xl font-black text-white mb-1 tabular-nums">
              $28,000<span className="text-3xl">+</span>
            </div>
            <div className="text-base font-semibold text-amber-50">in the first year alone</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CostComparisonInfographic
