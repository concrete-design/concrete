import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export type TitleTypes =
  | 'headerMaxi'
  | 'headerBig'
  | 'header'
  | 'headerSmall'
  | 'section'
  | 'regular'

export interface TitleProps
  extends ThemeOverridesProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  type: TitleTypes
  color?: string
  as?: styledAs
}
