import { Text, theme } from '@concrete-design/core'
import styled, { css } from 'styled-components'

export const IconCellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const IconContainer = styled.div<{ color?: string }>`
  &[data-large='true'] {
    font-size: 24px;
  }

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : css`
          color: ${theme.textColor()};
        `};
`

export const LabelContainer = styled(Text)`
  margin-left: 8px;
`
