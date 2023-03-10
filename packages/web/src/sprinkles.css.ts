import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { breakpoints, tokens } from './tokens'

const responsiveAtomicProps = defineProperties({
  properties: {
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    fontSize: tokens.fontSizes,
    paddingTop: tokens.space,
    paddingBottom: tokens.space,
    paddingLeft: tokens.space,
    paddingRight: tokens.space,
    marginTop: tokens.space,
    marginBottom: tokens.space,
    marginLeft: tokens.space,
    marginRight: tokens.space,
  },
  conditions: {
    sm: {},
    md: { '@media': `screen and (min-width: ${breakpoints.sm})` },
    lg: { '@media': `screen and (min-width: ${breakpoints.md})` },
  },
  defaultCondition: 'sm',
  responsiveArray: ['sm', 'md', 'lg'],
})

const unresponsiveAtomicProps = defineProperties({
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    cursor: ['default', 'pointer'],

    fontSize: tokens.fontSizes,
    fontFamily: tokens.fonts,
    fontWeight: tokens.fontWeights,
    lineHeight: tokens.lineHeights,
    borderRadius: tokens.radii,
    borderWidth: tokens.borderWidths,
    opacity: tokens.opacity,
    zIndex: tokens.zIndices,
    boxShadow: tokens.shadows,

    paddingTop: tokens.space,
    paddingBottom: tokens.space,
    paddingLeft: tokens.space,
    paddingRight: tokens.space,
    marginTop: tokens.space,
    marginBottom: tokens.space,
    marginLeft: tokens.space,
    marginRight: tokens.space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    justify: ['justifyContent'],
    align: ['alignItems'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const colorAtomicProps = defineProperties({
  properties: {
    color: tokens.colors,
    backgroundColor: tokens.colors,
  },
  shorthands: {
    bg: ['backgroundColor'],
  },
})

export const sprinkles = createSprinkles(
  unresponsiveAtomicProps,
  colorAtomicProps,
  responsiveAtomicProps,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
