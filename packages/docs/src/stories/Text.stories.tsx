import { Text as TextReactComponent } from '@loureiro/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: TextReactComponent,
  argTypes: {
    css: { table: { disable: true } },
    children: { control: { type: 'text' } },
    as: {
      options: ['p', 'span', 'strong', 'em'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
        'giant',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    children: 'Text',
    as: 'span',
    size: 'md',
  },
} as Meta

export const Text: StoryObj = {}

export const CustomTag: StoryObj = {
  args: {
    children: 'Text strong',
    as: 'strong',
    size: '9xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the component is a <strong>span</strong> tag, but you can change it to <strong>p</strong> and <strong>strong</strong>',
      },
    },
  },
}
