"use client"

import React, { useState } from "react"
import dynamic from "next/dynamic"

// Import all infographic renderers
const renderers: Record<string, React.ComponentType<any>> = {
  speed: dynamic(() => import("./infographics/SpeedGaugeInfographic"), {
    loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading visualization" />,
    ssr: false
  }),
  comparison: dynamic(() => import("./infographics/ComparisonChartInfographic"), {
    loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading visualization" />,
    ssr: false
  }),
  timeline: dynamic(() => import("./infographics/TimelineInfographic"), {
    loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading visualization" />,
    ssr: false
  }),
  pricing: dynamic(() => import("./infographics/PricingInfographic"), {
    loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading visualization" />,
    ssr: false
  }),
  "cost-comparison": dynamic(() => import("./infographics/CostComparisonInfographic"), {
    loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading visualization" />,
    ssr: false
  }),
  "vendor-lock-in": dynamic(() => import("./infographics/VendorLockInIllustration"), {
    loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading visualization" />,
    ssr: false
  }),
  "template-comparison": dynamic(() => import("./infographics/TemplateVsCustomComparison"), {
    loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading visualization" />,
    ssr: false
  }),
  custom: dynamic(() => import("./infographics/CustomInfographic"), {
    loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading visualization" />,
    ssr: false
  }),
}

export interface InfographicProps {
  type: keyof typeof renderers
  title?: string
  subtitle?: string
  data?: Record<string, any>
  layout?: "horizontal" | "vertical"
  [key: string]: any
}

export const Infographic: React.FC<InfographicProps> = ({
  type,
  title,
  subtitle,
  data,
  layout = "horizontal",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true)

  const Renderer = renderers[type]

  if (!Renderer) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-700 font-semibold">Unknown infographic type: {type}</p>
      </div>
    )
  }

  return (
    <div className={`w-full ${layout === "vertical" ? "flex flex-col" : ""} my-12`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>}
          {subtitle && <p className="text-slate-600 font-medium">{subtitle}</p>}
        </div>
      )}
      <Renderer
        isVisible={isVisible}
        data={data}
        layout={layout}
        {...props}
      />
    </div>
  )
}

export default Infographic
