import * as React from 'react'

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  small?: boolean
  disabled?: boolean
  children?: React.ReactElement<any>
  triggerRef?: React.RefObject<HTMLElement>
  backgroundStyle?: 'dark' | 'light'
}

export type Position = {
  top: number
  left: number
}

export enum TooltipVisibilityState {
  NotInstantiated,
  HiddenWaitingToBeVisible,
  HiddenHasBeenVisible,
  Visible,
}

export interface TooltipState {
  visibilityState: TooltipVisibilityState
  position: Position
}

export enum ActionTypes {
  SetVisibilityState = 0,
  UpdatePosition = 1,
}

export type TooltipActions =
  | { type: ActionTypes.SetVisibilityState; value: TooltipVisibilityState }
  | { type: ActionTypes.UpdatePosition }

export type UseTooltipResult = [
  TooltipState,
  { onMouseEnter: () => void; onMouseLeave: () => void },
  {
    trigger: React.RefObject<HTMLElement>
    tooltip: React.RefObject<HTMLDivElement>
  }
]
