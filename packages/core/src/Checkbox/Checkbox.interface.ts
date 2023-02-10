import * as React from 'react'

import { WithLabel } from '../withLabel'

export interface CheckboxInnerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  disabled?: boolean
  error?: boolean
  small?: boolean
}

export interface CheckboxProps extends WithLabel<CheckboxInnerProps> {}
