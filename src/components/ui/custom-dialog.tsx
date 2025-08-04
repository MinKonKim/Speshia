import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui'
import { DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'

interface CustomDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  title?: string
  description?: string
  children?: React.ReactNode
  footerContent?: React.ReactNode
  className?: string
}

export function CustomDialog({
  open = false,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footerContent,
  className = '',
}: CustomDialogProps) {
  const content = (
    <DialogContent className={`max-w-md rounded-lg border-0 bg-white p-6 shadow-lg ${className}`}>
      <DialogHeader>
        {title && <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>}
        {description && (
          <DialogDescription className="text-gray-600">{description}</DialogDescription>
        )}
      </DialogHeader>
      <div className="py-4">{children}</div>
      {footerContent && <DialogFooter>{footerContent}</DialogFooter>}
    </DialogContent>
  )

  if (trigger) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        {content}
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {content}
    </Dialog>
  )
}
