import { recipe, RecipeVariants, sprinkles } from '@loureiro/web'

export const textStyles = recipe({
  base: sprinkles({
    fontFamily: 'default',
    fontWeight: 'regular',
    lineHeight: 'normal',
    m: '0',
  }),

  variants: {
    size: {
      xxs: sprinkles({ fontSize: 'xxs', lineHeight: 'shorter' }),
      xs: sprinkles({ fontSize: 'xs', lineHeight: 'shorter' }),
      sm: sprinkles({ fontSize: 'sm', lineHeight: 'shorter' }),
      md: sprinkles({ fontSize: 'md', lineHeight: 'shorter' }),
      lg: sprinkles({ fontSize: 'lg', lineHeight: 'shorter' }),
      xl: sprinkles({ fontSize: 'xl', lineHeight: 'shorter' }),
      '2xl': sprinkles({ fontSize: '2xl' }),
      '4xl': sprinkles({ fontSize: '4xl' }),
      '5xl': sprinkles({ fontSize: '5xl' }),
      '6xl': sprinkles({ fontSize: '6xl' }),
      '7xl': sprinkles({ fontSize: '7xl' }),
      '8xl': sprinkles({ fontSize: '8xl' }),
      giant: sprinkles({ fontSize: 'giant' }),
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type TextVariantSize = RecipeVariants<typeof textStyles>
