import { type Atoms, atoms, clsx, extractAtoms } from '@loureiro/web'
import { HTMLAttributes } from 'react'

import { textStyles, TextVariantSize } from './Text.css'

const allowedHtmlTags = ['p', 'span', 'strong', 'em'] as const

type AllowedHTMLTags = (typeof allowedHtmlTags)[number]

export type TextProps = HTMLAttributes<HTMLElement> &
  Atoms &
  TextVariantSize & {
    as?: AllowedHTMLTags
  }

export const Text = ({
  as: Component = 'span',
  size = 'md',
  children,
  ...rest
}: TextProps) => {
  const [atomsProps, propsToForward] = extractAtoms(rest)
  const variantClass = textStyles({ size })

  const isAllowedHtmlTag = (
    htmlTag: AllowedHTMLTags,
  ): htmlTag is AllowedHTMLTags => Component.includes(htmlTag)

  const className = clsx(
    variantClass,
    propsToForward.className,
    atoms({
      reset: isAllowedHtmlTag(Component) ? Component : 'span',
      ...atomsProps,
    }),
  )

  return (
    <Component {...propsToForward} className={className}>
      {children}
    </Component>
  )
}

Text.displayName = 'Text'
