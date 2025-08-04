import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui'
import { cn } from '@/lib'
import { DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'

interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  title?: string
  description?: string
  children?: React.ReactNode
  footerContent?: React.ReactNode
  className?: string
}

export function Modal({
  open = false,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footerContent,
  className = '',
}: ModalProps) {
  const content = (
    <DialogContent
      className={cn(
        'max-w-md rounded-lg border-gray-300 bg-white p-6 shadow-lg',
        'transition duration-100 ease-out',
        className
      )}
    >
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
