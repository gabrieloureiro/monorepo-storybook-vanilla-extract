import clsx from 'clsx'
import { omit, pick } from 'lodash'

import { baseReset, elementResets } from './reset.css'
import { Sprinkles, sprinkles } from './sprinkles.css'

export type Atoms = {
  reset?: keyof JSX.IntrinsicElements
  className?: string | string[]
} & Sprinkles

export function atoms(atoms: Atoms) {
  const { reset, className, ...rest } = atoms
  const sprinklesClassNames = sprinkles(rest)

  return clsx(
    sprinklesClassNames,
    className,
    reset ? [baseReset, elementResets[reset]] : null,
  )
}

const keys = Array.from(sprinkles.properties.keys())

export const extractAtoms = <P extends object>(props: P) => {
  return [pick(props, keys), omit(props, keys)]
}
