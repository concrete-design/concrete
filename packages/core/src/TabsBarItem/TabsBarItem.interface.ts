import * as React from 'react'

export interface TabsBarItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  active?: boolean
  disabled?: boolean
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
}
