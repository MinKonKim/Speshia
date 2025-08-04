import { Button } from '@/components/ui'
import { Modal } from '@/components/ui/modal'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

const meta: Meta<typeof Modal> = {
  title: 'UI/ Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    // The story now controls these props internally, so we hide them from the controls panel
    open: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    trigger: { table: { disable: true } },
    footerContent: { table: { disable: true } },

    // Props that can be edited in the controls panel
    title: { control: 'text' },
    description: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    title: 'Dialog Title',
    description: 'This is a description for the dialog.',
    children: 'This is the content of the dialog.',
  },
}

export default meta
type Story = StoryObj<typeof Modal>

// Base template for demonstrating the dialog
const DialogTemplate: Story['render'] = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Modal
      {...args}
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={<Button>Open Dialog</Button>}
      footerContent={
        <>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Save</Button>
        </>
      }
    />
  )
}

export const Default: Story = {
  render: DialogTemplate,
}

export const WithoutDescription: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <Modal
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        description={undefined}
        trigger={<Button>Open Dialog</Button>}
        footerContent={
          <>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Save</Button>
          </>
        }
      />
    )
  },
}

export const WithoutFooter: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <Modal
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={<Button>Open Dialog</Button>}
      />
    )
  },
}
