import { Background, palette } from '@concrete-design/core'
import { useColorMode } from '@docusaurus/theme-common'
import * as React from 'react'
import styled from 'styled-components'

const TransparentBackground = styled(Background)`
  background: transparent !important;
`

export const DocuBackground: React.FunctionComponent = ({ children }) => {
  const { isDarkTheme } = useColorMode()

  return (
    <TransparentBackground
      backgroundColor={
        isDarkTheme
          ? palette.neutralWhiteWithIntensityFading[0]
          : palette.neutralWhiteWithIntensityFading[1000]
      }
    >
      {children}
    </TransparentBackground>
  )
}
