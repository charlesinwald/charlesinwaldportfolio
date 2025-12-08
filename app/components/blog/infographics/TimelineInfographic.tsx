"use client"

import type React from "react"
import { useState, useEffect } from "react"

const TimelineInfographic = () => {
  const [hoveredTask, setHoveredTask] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [totalHours, setTotalHours] = useState(0)
  const [opportunityCost, setOpportunityCost] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Animate total hours counter
    const hoursInterval = setInterval(() => {
      setTotalHours((prev) => {
        if (prev >= 90) {
          clearInterval(hoursInterval)
          return 90
        }
        return prev + 3
      })
    }, 30)

    // Animate opportunity cost counter
    const costInterval = setInterval(() => {
      setOpportunityCost((prev) => {
        if (prev >= 10000) {
          clearInterval(costInterval)
          return 10000
        }
        return prev + 333
      })
    }, 30)

    return () => {
      clearInterval(hoursInterval)
      clearInterval(costInterval)
    }
  }, [])

  const tasks = [
    { id: "learning", label: "Learning Platform", hours: 15, color: "#3b82f6", icon: "learning" },
    { id: "building", label: "Building Pages", hours: 25, color: "#8b5cf6", icon: "building" },
    { id: "troubleshooting", label: "Troubleshooting", hours: 20, color: "#ec4899", icon: "troubleshooting" },
    { id: "content", label: "Content Creation", hours: 30, color: "#10b981", icon: "content" },
  ]

  const IconComponent = ({ type, className }: { type: string; className?: string }) => {
    const icons: Record<string, React.ReactNode> = {
      learning: (
        <svg className={className} viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <path
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            stroke="currentColor"
          />
        </svg>
      ),
      building: (
        <svg className={className} viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <path
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            stroke="currentColor"
          />
        </svg>
      ),
      troubleshooting: (
        <svg className={className} viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <path
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            stroke="currentColor"
          />
        </svg>
      ),
      content: (
        <svg className={className} viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <path
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            stroke="currentColor"
          />
        </svg>
      ),
      maintenance: (
        <svg className={className} viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <path
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            stroke="currentColor"
          />
        </svg>
      ),
      money: (
        <svg className={className} viewBox="0 0 24 24" strokeWidth="2" fill="none">
          <path
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="currentColor"
          />
        </svg>
      ),
    }
    return icons[type]
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .timeline-ring {
            stroke: #e2e8f0;
          }
          .dark .timeline-ring {
            stroke: #404040;
          }
        `
      }} />
      <div className="w-full max-w-7xl mx-auto bg-neutral-900/50 dark:bg-neutral-900 rounded-3xl p-12 shadow-2xl dark:shadow-neutral-950/50">
      {/* Header */}
      <div
        className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <h2 className="text-5xl font-extrabold text-slate-800 dark:text-neutral-100 mb-3 leading-tight">The Hidden Cost of DIY Websites</h2>
        <p className="text-xl text-slate-500 dark:text-neutral-400 font-medium">Time investment most entrepreneurs don't calculate</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-10 items-center">
        {/* Left Legend */}
        <div className="flex flex-col gap-5">
          {tasks.slice(0, 3).map((task, index) => (
            <div
              key={task.id}
              onMouseEnter={() => setHoveredTask(task.id)}
              onMouseLeave={() => setHoveredTask(null)}
              className={`flex items-start gap-3 p-4 bg-amber-300 dark:bg-neutral-800/50 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              } ${hoveredTask === task.id ? "scale-105 shadow-lg bg-white dark:bg-neutral-800" : "hover:scale-102 hover:shadow-md"}`}
              style={{
                borderLeftColor: task.color,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white transition-transform duration-300"
                style={{ backgroundColor: task.color }}
              >
                <IconComponent type={task.icon} className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-slate-800 dark:text-neutral-200 mb-1">{task.label}</div>
                <div className="text-2xl font-extrabold text-orange-500 dark:text-orange-400">{task.hours} hrs</div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Clock/Pie Chart */}
        <div className="flex justify-center items-center relative">
          <svg
            width="380"
            height="380"
            viewBox="0 0 380 380"
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-45"}`}
          >
            {/* Learning Platform: 15 hrs (16.67%) */}
            <path
              d="M 190 190 L 190 10 A 180 180 0 0 1 313.85 70.15 Z"
              fill="#3b82f6"
              opacity={hoveredTask === "learning" ? 1 : 0.9}
              className="transition-all duration-300 origin-center"
              style={{
                filter: hoveredTask === "learning" ? "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.5))" : "none",
                transform: hoveredTask === "learning" ? "scale(1.05)" : "scale(1)",
                transformOrigin: "190px 190px",
                strokeDasharray: isVisible ? "0" : "1000",
                strokeDashoffset: isVisible ? "0" : "1000",
                animation: isVisible ? "drawPie 1s ease-out forwards" : "none",
                animationDelay: "0.2s",
              }}
            />

            {/* Building Pages: 25 hrs (27.78%) */}
            <path
              d="M 190 190 L 313.85 70.15 A 180 180 0 0 1 369.85 190 Z"
              fill="#8b5cf6"
              opacity={hoveredTask === "building" ? 1 : 0.9}
              className="transition-all duration-300"
              style={{
                filter: hoveredTask === "building" ? "drop-shadow(0 4px 12px rgba(139, 92, 246, 0.5))" : "none",
                transform: hoveredTask === "building" ? "scale(1.05)" : "scale(1)",
                transformOrigin: "190px 190px",
                animationDelay: "0.4s",
              }}
            />

            {/* Troubleshooting: 20 hrs (22.22%) */}
            <path
              d="M 190 190 L 369.85 190 A 180 180 0 0 1 313.85 309.85 Z"
              fill="#ec4899"
              opacity={hoveredTask === "troubleshooting" ? 1 : 0.9}
              className="transition-all duration-300"
              style={{
                filter: hoveredTask === "troubleshooting" ? "drop-shadow(0 4px 12px rgba(236, 72, 153, 0.5))" : "none",
                transform: hoveredTask === "troubleshooting" ? "scale(1.05)" : "scale(1)",
                transformOrigin: "190px 190px",
                animationDelay: "0.6s",
              }}
            />

            {/* Content Creation: 30 hrs (33.33%) */}
            <path
              d="M 190 190 L 313.85 309.85 A 180 180 0 0 1 66.15 309.85 Z"
              fill="#10b981"
              opacity={hoveredTask === "content" ? 1 : 0.9}
              className="transition-all duration-300"
              style={{
                filter: hoveredTask === "content" ? "drop-shadow(0 4px 12px rgba(16, 185, 129, 0.5))" : "none",
                transform: hoveredTask === "content" ? "scale(1.05)" : "scale(1)",
                transformOrigin: "190px 190px",
                animationDelay: "0.8s",
              }}
            />

            {/* Complete the circle back to start */}
            <path
              d="M 190 190 L 66.15 309.85 A 180 180 0 0 1 190 10 Z"
              fill="none"
              stroke="none"
            />

            {/* Outer ring */}
            <circle 
              cx="190" 
              cy="190" 
              r="180" 
              fill="none" 
              className="timeline-ring"
              strokeWidth="3"
            />
          </svg>

          {/* Center circle with total */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-white dark:bg-neutral-800 rounded-full shadow-xl dark:shadow-neutral-950/50 flex flex-col items-center justify-center z-10 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            <div className="text-6xl font-black text-slate-800 dark:text-neutral-100 leading-none">{totalHours}</div>
            <div className="text-base text-slate-500 dark:text-neutral-400 font-semibold mt-2 uppercase tracking-wider">Hours</div>
          </div>
        </div>

        {/* Right Cost Section */}
        <div className="flex flex-col gap-6">
          {/* Opportunity Cost Calculation */}
          <div
            className={`bg-gradient-to-br from-blue-500 to-blue-700 p-7 rounded-2xl text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="text-xs uppercase tracking-widest opacity-90 mb-3 font-semibold">Opportunity Cost</div>
            <div className="text-lg font-bold mb-4 leading-relaxed">
              100 hours
              <br />× $100/hour
            </div>
            <div className="text-5xl font-black border-t-2 border-white/30 pt-4">
              ${opportunityCost.toLocaleString()}
            </div>
          </div>

          {/* Lost Revenue */}
          <div
            className={`bg-gradient-to-br from-orange-500 to-orange-700 p-7 rounded-2xl text-white text-center transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <IconComponent type="money" className="w-9 h-9" />
            </div>
            <div className="text-xs uppercase tracking-widest opacity-90 mb-2 font-semibold">Lost Revenue</div>
            <div className="text-5xl font-black">${opportunityCost.toLocaleString()}</div>
          </div>

          {/* Maintenance Note */}
          <div
            className={`bg-amber-100 dark:bg-amber-900/30 border-2 border-amber-400 dark:border-amber-600 p-4 rounded-xl text-center transition-all duration-700 hover:scale-105 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <span className="text-amber-800 text-xl block mb-1 font-semibold">+ 10 hrs/month</span>
            <span className="text-amber-800 text-sm">Ongoing Maintenance</span>
          </div>
        </div>
      </div>

      {/* Bottom Legend */}
      <div
        className={`mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "0.8s" }}
      >
        {[
          { id: "content", label: "Content Creation", hours: "30 hrs", icon: "content", bgColor: "bg-emerald-500" },
          { id: "maintenance", label: "Ongoing Maintenance", hours: "10 hrs/mo", icon: "maintenance", bgColor: "bg-amber-500" },
        ].map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredTask(item.id)}
            onMouseLeave={() => setHoveredTask(null)}
            className={`flex items-start gap-3 p-4 bg-amber-300 dark:bg-neutral-800/50 rounded-xl cursor-pointer transition-all duration-300 ${
              hoveredTask === item.id ? "scale-105 shadow-lg bg-white dark:bg-neutral-800" : "hover:scale-102 hover:shadow-md"
            }`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white ${item.bgColor}`}>
              <IconComponent type={item.icon} className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-slate-800 dark:text-neutral-200 mb-1">{item.label}</div>
              <div className="text-2xl font-extrabold text-orange-500 dark:text-orange-400">{item.hours}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default TimelineInfographic
