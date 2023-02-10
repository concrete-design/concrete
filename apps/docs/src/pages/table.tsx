import Layout from '@theme/Layout'
import * as React from 'react'

export default () => (
  <Layout title="Table" description="Powered by storybook">
    <iframe
      title="table"
      style={{ height: 'calc(100vh - var(--ifm-navbar-height))' }}
      src="https://habx.github.io/ui-table"
      frameBorder="0"
      height="100%"
      width="100%"
    />
  </Layout>
)
