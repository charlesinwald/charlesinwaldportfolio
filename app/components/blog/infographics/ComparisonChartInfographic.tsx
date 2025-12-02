"use client"

import type React from "react"
import { useState, useEffect } from "react"

const ComparisonChartInfographic = () => {
  const [isVisible, setIsVisible] = useState(true)

  const IconComponent = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
      speed: (
        <svg className="w-8 h-8 stroke-slate-600" viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      search: (
        <svg className="w-8 h-8 stroke-slate-600" viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
      traffic: (
        <svg className="w-8 h-8 stroke-slate-600" viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      ranking: (
        <svg className="w-8 h-8 stroke-slate-600" viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
        </svg>
      ),
      money: (
        <svg className="w-9 h-9 stroke-white" viewBox="0 0 24 24" strokeWidth="2.5" fill="none">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    }
    return icons[type]
  }

  const AnimatedNumber = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const timeout = setTimeout(() => {
        const duration = 1500
        const steps = 60
        const increment = value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(timer)
      }, delay)

      return () => clearTimeout(timeout)
    }, [isVisible, value, delay])

    return (
      <>
        {count}
        {suffix}
      </>
    )
  }

  const MetricRow = ({
    title,
    icon,
    diyValue,
    diyLabel,
    proValue,
    proLabel,
    diyWidth,
    proWidth,
    index,
  }: {
    title: string
    icon: string
    diyValue: string
    diyLabel: string
    proValue: string
    proLabel: string
    diyWidth: number
    proWidth: number
    index: number
  }) => {
    const [hoveredBar, setHoveredBar] = useState<"diy" | "pro" | null>(null)

    return (
      <div
        className={`grid grid-cols-[280px_1fr_120px] gap-6 items-center transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[14px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-6">
            <IconComponent type={icon} />
          </div>
          <div className="text-lg font-bold text-slate-800">{title}</div>
        </div>

        <div className="flex flex-col gap-3 pr-4">
          {/* DIY Bar */}
          <div className="relative">
            <div className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">{diyLabel}</div>
            <div
              className={`h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 shadow-lg relative overflow-hidden transition-all duration-500 ${
                hoveredBar === "diy" ? "scale-105 shadow-xl shadow-red-500/50" : "hover:scale-[1.02]"
              } ${isVisible ? "animate-in" : ""}`}
              style={{
                width: isVisible ? `${diyWidth}%` : "0%",
                transitionDelay: `${index * 150 + 300}ms`,
              }}
              onMouseEnter={() => setHoveredBar("diy")}
              onMouseLeave={() => setHoveredBar(null)}
            />
          </div>

          {/* Professional Bar */}
          <div className="relative">
            <div className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">{proLabel}</div>
            <div
              className={`h-12 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg relative overflow-hidden transition-all duration-500 ${
                hoveredBar === "pro" ? "scale-105 shadow-xl shadow-blue-500/50" : "hover:scale-[1.02]"
              } ${isVisible ? "animate-in" : ""}`}
              style={{
                width: isVisible ? `${proWidth}%` : "0%",
                transitionDelay: `${index * 150 + 400}ms`,
              }}
              onMouseEnter={() => setHoveredBar("pro")}
              onMouseLeave={() => setHoveredBar(null)}
            />
          </div>
        </div>

        {/* Values Column */}
        <div className="flex flex-col gap-3 text-right">
          <div className="text-[22px] font-extrabold text-slate-800 h-12 flex items-center justify-end">
            {diyValue}
          </div>
          <div className="text-[22px] font-extrabold text-slate-800 h-12 flex items-center justify-end">
            {proValue}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1400px] bg-white rounded-3xl p-16 shadow-2xl relative mx-auto">
      {/* Header */}
      <div
        className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <h2 className="text-5xl font-extrabold text-slate-800 mb-3">DIY vs Professional Website</h2>
        <p className="text-xl text-slate-500 font-medium">Performance comparison across key metrics</p>
      </div>

      {/* Legend */}
      <div
        className={`flex justify-center gap-16 mb-10 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-red-500">
            DIY Builder Site
          </span>
        </div>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-blue-500">
            Professional Site
          </span>
        </div>
      </div>

      {/* Comparison Metrics */}
      <div className="flex flex-col gap-8 mb-10">
        <MetricRow
          title="Page Load Speed"
          icon="speed"
          diyValue="2.5s"
          diyLabel="DIY Builder"
          proValue="0.8s"
          proLabel="Professional"
          diyWidth={83.3}
          proWidth={26.7}
          index={0}
        />

        <MetricRow
          title="SEO Score"
          icon="search"
          diyValue="65/100"
          diyLabel="DIY Builder"
          proValue="92/100"
          proLabel="Professional"
          diyWidth={65}
          proWidth={92}
          index={1}
        />

        <MetricRow
          title="Organic Traffic"
          icon="traffic"
          diyValue="1,000/mo"
          diyLabel="DIY Builder"
          proValue="3,500/mo"
          proLabel="Professional"
          diyWidth={28.6}
          proWidth={100}
          index={2}
        />

        <MetricRow
          title="Search Ranking"
          icon="ranking"
          diyValue="Page 3"
          diyLabel="DIY Builder"
          proValue="Page 1"
          proLabel="Professional"
          diyWidth={33.3}
          proWidth={100}
          index={3}
        />
      </div>

      {/* Callout Box */}
      <div
        className={`bg-gradient-to-br from-amber-400 to-orange-500 p-8 rounded-2xl text-center shadow-xl shadow-amber-400/30 relative overflow-hidden transition-all duration-700 delay-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/40 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 hover:rotate-12 hover:scale-110">
          <IconComponent type="money" />
        </div>
        <div className="text-6xl font-black text-white leading-none mb-2 drop-shadow-lg">
          <AnimatedNumber value={53} suffix=".3%" delay={800} />
        </div>
        <div className="text-xl font-semibold text-white drop-shadow">
          of all website traffic comes from organic search
        </div>
      </div>

      {/* Note */}
      <div
        className={`text-center text-sm text-slate-400 mt-5 italic transition-all duration-700 delay-900 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Data based on industry averages and Google Analytics benchmarks
      </div>
    </div>
  )
}

export default ComparisonChartInfographic
