import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import * as React from 'react'
import styled from 'styled-components'

import { Background, breakpoints, Button, Text } from '@concrete-design/core'

import { DocuBackground } from '../components/DocuBackground'

export const HomeImg = styled.img`
  position: absolute;
  z-index: -1;
  min-width: 100%;
  height: 600px;
  object-fit: cover;
`

export const HomeMainContainer = styled(Background)`
  background: transparent !important;
  height: 600px;
`

export const HomeHeadlineContainer = styled.div`
  padding: 84px;
  display: grid;
  grid-gap: 32px;

  @media (${breakpoints.below.tablet}) {
    padding: 32px;
  }
`

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  grid-gap: 64px;
  max-width: 1200px;
  margin: 64px auto;
  @media (${breakpoints.below.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const FeatureContainer = styled.div`
  img {
    width: 100%;
    margin-bottom: 32px;
  }
`

type FeatureProps = {
  label: string
  illustration: string
  reversed?: boolean
}

const features: FeatureProps[] = [
  {
    label: 'Structured guidelines with colors, typography, shadows, and more',
    illustration: 'colors.png',
  },
  {
    label: 'A complete set of component to build your app',
    illustration: 'components.png',
  },
  {
    label: 'A full set of icons internally designed',
    illustration: 'icons.png',
  },
]

export const Feature: React.FunctionComponent<FeatureProps> = ({
  label,
  illustration,
  reversed,
}) => {
  const imgUrl = useBaseUrl(`img/illustrations/${illustration}`)
  const components = React.useMemo(() => {
    const orderedComponent = [
      <img src={imgUrl} alt="" />,
      <Text type="veryLarge">{label}</Text>,
    ]
    if (reversed) {
      return orderedComponent.reverse()
    }
    return orderedComponent
  }, [imgUrl, label, reversed])
  return <React.Fragment>{components}</React.Fragment>
}

export const LogoContainer = styled.div`
  display: grid;
  grid-gap: 12px;
  img {
    height: 80px;
    &:first-child {
      margin-left: -12px;
    }
  }
`

const Container = styled.div`
  max-width: 800px;
  padding: 32px;
  margin: 0 auto;
`

export default () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const imgUrl = useBaseUrl('img/cover.svg')
  const logoUrl = useBaseUrl(`img/logo-white.svg`)
  const designSystemUrl = useBaseUrl(`img/design-system.svg`)

  return (
    <Layout
      title={`${siteConfig.title} documentation`}
      description="Design System By habx>"
    >
      <HomeMainContainer
        backgroundColor={(theme) =>
          theme.neutralColor.withIntensityFading['100']
        }
      >
        <HomeImg src={imgUrl} alt="cover" />
        <HomeHeadlineContainer>
          <LogoContainer>
            <img height={80} src={logoUrl} alt="concrete" />
            <img height={80} src={designSystemUrl} alt="designSystem" />
          </LogoContainer>
          <Link to={useBaseUrl('docs/')}>
            <Button secondary>Get Started</Button>
          </Link>
        </HomeHeadlineContainer>
      </HomeMainContainer>
      <DocuBackground>
        <Background
          backgroundColor={(theme) =>
            theme.neutralColor.withIntensityFading['100']
          }
        >
          <Container>
            <Text type="large">
              Concrete design system is a design system used and developed by{' '}
              <strong>hab</strong>x.
              <br />
              It is built with a useful set of styles and versatile components.
              Based on a solid basis and efficient design. It is adaptable and
              usable by most.
            </Text>
          </Container>
        </Background>
        <Features>
          {features.map((feature, index) => (
            <Feature key={index} reversed={index % 2 === 0} {...feature} />
          ))}
        </Features>
      </DocuBackground>
    </Layout>
  )
}
