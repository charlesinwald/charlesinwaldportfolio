import React from 'react'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

interface BentoGridItemProps {
  children: React.ReactNode
  className?: string
  colSpan?: string
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 ${className}`}>
      {children}
    </div>
  )
}

export function BentoGridItem({ children, className = '', colSpan = '' }: BentoGridItemProps) {
  return (
    <div
      className={`bg-white dark:bg-neutral-800 p-6 rounded-lg shadow border border-black dark:border-neutral-700 ${colSpan} ${className}`}
    >
      {children}
    </div>
  )
}

