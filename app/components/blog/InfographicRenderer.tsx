"use client"

import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { getInfographic } from "app/lib/infographics.config"

const Infographic = dynamic(() => import("./Infographic"), {
  loading: () => <div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading infographic" />,
})

export const InfographicRenderer = ({ id, ...props }: any) => {
  const config = getInfographic(id)
  if (!config) return null

  return (
    <Suspense fallback={<div className="w-full h-64 bg-slate-100 rounded-lg animate-pulse" aria-busy="true" aria-label="Loading infographic" />}>
      <Infographic {...config} {...props} />
    </Suspense>
  )
}
