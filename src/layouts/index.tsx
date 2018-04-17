import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import Header from './Header'
import Footer from './Footer'

injectGlobal`
  body {
    margin: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.75;
    color: #212529;
  }
`

const Wrapper = styled.div`
  width: 85%;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  width: 100%;
`

interface Props {
  children: () => JSX.Element
}

function Layout({ children }: Props) {
  return (
    <Wrapper>
      <Helmet title="Saad Quadri" />
      <Header />
      <Main>{children()}</Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
