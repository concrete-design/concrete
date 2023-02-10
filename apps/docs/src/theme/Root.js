// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Provider, ThemeProvider, theme, EuclidFont } from '@concrete-design/core'

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: ${theme.font()};
    --ifm-color-primary: ${theme.color('primary')};
    --ifm-color-primary-dark: ${theme.color('primary')};
    --ifm-color-primary-darker: ${theme.color('primary', {
      variation: 'loud',
    })};
    --ifm-color-primary-darkest: ${theme.color('primary', {
      variation: 'louder',
    })};
    --ifm-color-primary-light: ${theme.color('primary', { variation: 'calm' })};
    --ifm-color-primary-lighter: ${theme.color('primary', {
      variation: 'calmer',
    })};
    --ifm-color-primary-lightest: ${theme.color('primary', {
      variation: 'calmer',
    })};
    --ifm-code-font-size: 95%;
    --ifm-footer-background-color: ${theme.color('secondary')};
    --ifm-footer-color: ${theme.neutralColor('100')};
    --ifm-footer-link-color: ${theme.neutralColor('100')};
  }

  .docusaurus-highlight-code-line {
    background-color: rgb(72, 77, 91);
    display: block;
    margin: 0 calc(-1 * var(--ifm-pre-padding));
    padding: 0 var(--ifm-pre-padding);
  }
  #__docusaurus , #__docusaurus > div {
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: none;
  }
  .navbar__brand {
    margin-top: -2px;
    margin-right: 8px;
  }
  .navbar__logo {
    height: 24px;
    margin: 0;
  }
`

export default ({ children }) => {
  return (
    <Provider>
      <ThemeProvider>
        {children}
        <GlobalStyle />
      </ThemeProvider>
      <EuclidFont />
    </Provider>
  )
}
