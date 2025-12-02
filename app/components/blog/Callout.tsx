import { ReactNode } from "react"
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

type CalloutType = "info" | "success" | "warning" | "error"

interface CalloutProps {
  type?: CalloutType
  children: ReactNode
  customIcon?: ReactNode
}

const calloutStyles: Record<
  CalloutType,
  { container: string; border: string; icon: ReactNode; iconColor: string }
> = {
  info: {
    container: "bg-blue-50/50 dark:bg-blue-950/20 backdrop-blur-sm",
    border: "border-l-4 border-blue-500 dark:border-blue-400",
    icon: <Info className="w-5 h-5" />,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  success: {
    container: "bg-green-50/50 dark:bg-green-950/20 backdrop-blur-sm",
    border: "border-l-4 border-green-500 dark:border-green-400",
    icon: <CheckCircle className="w-5 h-5" />,
    iconColor: "text-green-600 dark:text-green-400",
  },
  warning: {
    container: "bg-amber-50/50 dark:bg-amber-950/20 backdrop-blur-sm",
    border: "border-l-4 border-amber-500 dark:border-amber-400",
    icon: <AlertTriangle className="w-5 h-5" />,
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  error: {
    container: "bg-red-50/50 dark:bg-red-950/20 backdrop-blur-sm",
    border: "border-l-4 border-red-500 dark:border-red-400",
    icon: <XCircle className="w-5 h-5" />,
    iconColor: "text-red-600 dark:text-red-400",
  },
}

export function Callout({ type = "info", children, customIcon }: CalloutProps) {
  const styles = calloutStyles[type]

  return (
    <div
      className={`not-prose my-8 rounded-r-xl ${styles.border} ${styles.container} shadow-sm transition-all duration-200 hover:shadow-md`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-4 py-5 pr-5 pl-6 lg:py-6 lg:pr-6 lg:pl-8">
        <div className={`flex-shrink-0 mt-0.5 ${styles.iconColor}`}>{customIcon || styles.icon}</div>
        <div className="flex-1 min-w-0 text-foreground/90 leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p]:mb-3 [&>p:last-child]:mb-0 [&>strong]:font-semibold [&>strong]:text-foreground">
          {children}
        </div>
      </div>
    </div>
  )
}
