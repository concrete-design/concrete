
<p align="center">
  <a href="https://habx.github.io/concrete-docs/">
    <img height="300" src="https://habx.github.io/concrete-docs/img/concrete-cover.svg">
  </a>
</p>

<h1 align="center">@concrete-design/core</h1>

[![CircleCI](https://img.shields.io/circleci/build/github/habx/ui-core)](https://app.circleci.com/pipelines/github/habx/ui-core)
[![Version](https://img.shields.io/npm/v/@concrete-design/core)](https://www.npmjs.com/package/@concrete-design/core)
[![Size](https://img.shields.io/bundlephobia/min/@concrete-design/core)](https://bundlephobia.com/result?p=@concrete-design/core)
[![License](https://img.shields.io/github/license/habx/ui-core)](/LICENSE)

Design System used on all the applications developed by HABX

## Installation
```shell 
npm i @concrete-design/core
 ```
 
#### Add Providers

###### App.ts
```typescript jsx
import { Provider as DesignSystemProvider, ThemeProvider } from '@concrete-design/core'

const App: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        <DesignSystemProvider>
            {children}
        </DesignSystemProvider>
    </ThemeProvider>

  )
}
```

[documentation](https://habx.github.io/concrete-docs/)

Test all our components in our [Storybook](https://habx.github.io/ui-core/)
