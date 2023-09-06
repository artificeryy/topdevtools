import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-1 text-sm font-regular transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        design: "border-transparent bg-pink-500 text-primary-foreground",
        develop: "border-transparent bg-fuchsia-600 text-primary-foreground",
        ship: "border-transparent bg-orange-500 text-primary-foreground",
        frontend: "border-transparent bg-green-500 text-primary-foreground"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: string;
}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant: variant as "default" | "secondary" | "destructive" | "outline" | "design" | "develop" | "ship" | "frontend" }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
