import Layout from '@theme/Layout'
import * as React from 'react'

export default () => (
  <Layout title="Components" description="Powered by storybook">
    <iframe
      title="components"
      src="https://habx.github.io/ui-core"
      frameBorder="0"
      style={{ height: 'calc(100vh - var(--ifm-navbar-height))' }}
      width="100%"
    />
  </Layout>
)
