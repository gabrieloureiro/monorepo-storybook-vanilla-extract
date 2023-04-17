import '@loureiro/css'

import { Text as TextReactComponent } from '@loureiro/react'
import { Meta, StoryObj } from '@storybook/react'

const allowedHtmlTags = ['p', 'span', 'strong', 'em']

export default {
  title: 'Typography/Text',
  component: TextReactComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    as: {
      options: allowedHtmlTags,
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
        story: `By default the component is a <strong>span</strong> tag, but you can change it to <strong>${allowedHtmlTags}</strong> tags.`,
      },
    },
  },
}
