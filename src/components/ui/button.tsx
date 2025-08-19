import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary-500 text-white shadow-xs hover:bg-primary-400 focus-visible:ring-primary-500/30 dark:focus-visible:ring-primary-500/50 dark:bg-primary-600 dark:hover:bg-primary-500',
        destructive:
          'bg-red-600 text-white shadow-xs hover:bg-red-500 focus-visible:ring-red-600/30 dark:focus-visible:ring-red-600/50 dark:bg-red-700 dark:hover:bg-red-600',
        outline:
          'border border-gray3 bg-background text-gray8 shadow-xs hover:bg-primary-100 hover:text-primary-700 dark:bg-gray8 dark:text-gray2 dark:border-gray5 dark:hover:bg-gray7',
        secondary:
          'bg-secondary-500 text-white shadow-xs hover:bg-secondary-400 focus-visible:ring-secondary-500/30 dark:focus-visible:ring-secondary-500/50 dark:bg-secondary-600 dark:hover:bg-secondary-500',
        ghost:
          'hover:bg-accent-100 hover:text-gray9 dark:hover:bg-accent-200 dark:hover:text-white',
        link: 'text-primary-500 underline-offset-4 hover:underline',
        unstyled: '',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
