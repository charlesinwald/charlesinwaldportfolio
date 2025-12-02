"use client"

import type React from "react"

interface CustomInfographicProps {
  isVisible: boolean
  data?: Record<string, any>
  layout?: "horizontal" | "vertical"
  children?: React.ReactNode
}

const CustomInfographic: React.FC<CustomInfographicProps> = ({
  isVisible,
  data = {},
  layout = "horizontal",
  children,
}) => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-12 md:p-16 shadow-xl">
      {children ? (
        children
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-600 font-medium">Custom infographic - add your own content via children prop</p>
        </div>
      )}
    </div>
  )
}

export default CustomInfographic
