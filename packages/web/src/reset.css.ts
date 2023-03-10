import { style } from '@vanilla-extract/css'

export const baseReset = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  textDecoration: 'none',
})

const list = style({
  listStyle: 'none',
})

const a = style({
  textDecoration: 'none',
  color: 'inherit',
})

const button = style({
  background: 'none',
})

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

type Resets = Partial<Record<keyof JSX.IntrinsicElements, string>>

export const elementResets: Resets = {
  ul: list,
  ol: list,
  a,
  button,
  table,
}
