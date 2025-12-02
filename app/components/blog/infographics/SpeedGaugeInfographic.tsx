"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface SpeedGaugeProps {
  isVisible: boolean
  data?: {
    diySpeed?: number
    proSpeed?: number
    conversionLoss?: Array<{ seconds: number; loss: string; bounceRate?: string }>
  }
  layout?: "horizontal" | "vertical"
}

const SpeedGaugeInfographic: React.FC<SpeedGaugeProps> = ({
  isVisible,
  data = {
    diySpeed: 3,
    proSpeed: 0.8,
    conversionLoss: [
      { seconds: 1, loss: "7% fewer conversions" },
      { seconds: 2, loss: "15% fewer conversions" },
      { seconds: 3, loss: "40% bounce rate increase", bounceRate: "40%" },
    ],
  },
  layout = "horizontal",
}) => {
  const [gaugeRotation, setGaugeRotation] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setGaugeRotation(135)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const conversionLoss = data.conversionLoss || []
  const emojis = ["😐", "😰", "😡"]

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white rounded-3xl p-12 md:p-16 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Speed Gauge & Comparison */}
        <div
          className={`flex flex-col gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Speed Gauge */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 280 280" className="w-full h-full drop-shadow-lg">
                <defs>
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="33%" stopColor="#fbbf24" />
                    <stop offset="66%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>

                <circle cx="140" cy="140" r="130" fill="none" stroke="url(#gaugeGradient)" strokeWidth="20" />

                <line
                  x1="140"
                  y1="140"
                  x2="140"
                  y2="40"
                  stroke="#1a1a1a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "140px 140px",
                    transform: `rotate(${gaugeRotation}deg)`,
                    transition: "transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />

                <circle cx="140" cy="140" r="8" fill="#1a1a1a" />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-black text-red-500">{data.diySpeed}s</div>
                <div className="text-sm font-semibold text-slate-600 mt-1">Load Time</div>
              </div>
            </div>
          </div>

          {/* Speed Comparison Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border-3 border-red-300 shadow-lg text-center">
              <div className="text-4xl mb-3">🐌</div>
              <div className="text-sm font-bold text-slate-700">
                DIY Templates
                <br />
                <span className="text-red-600">{data.diySpeed}-5 seconds</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border-3 border-emerald-300 shadow-lg text-center">
              <div className="text-4xl mb-3">🚀</div>
              <div className="text-sm font-bold text-slate-700">
                Professional
                <br />
                <span className="text-emerald-600">{data.proSpeed} seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Impact Data Points */}
        <div
          className={`flex flex-col gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {conversionLoss.map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "8px solid #e5e7eb",
                    borderTopColor: index === 0 ? "#fbbf24" : index === 1 ? "#f97316" : "#ef4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    animation: `spin ${2 + index}s linear infinite`,
                  }}
                >
                  {emojis[index]}
                </div>
              </div>
              <div className="flex-grow bg-gradient-to-b from-white to-red-50 border-2 border-red-200 rounded-xl p-4 shadow-md">
                <div className="text-2xl font-black text-red-600 mb-1">{item.seconds} second{item.seconds > 1 ? "s" : ""}</div>
                <div className="text-sm font-bold text-red-900 mb-2">{item.loss}</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.max(1, 5 - index * 2) ? "text-xl" : "text-xl opacity-30"}>
                      💵
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-xl flex items-center gap-4">
        <span className="text-3xl flex-shrink-0">⚠️</span>
        <span className="text-lg font-bold leading-snug">
          53% of mobile users abandon sites that take longer than 3 seconds to load
        </span>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default SpeedGaugeInfographic
