import * as React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { Header } from './components/Header'

const App = () => {

  return <AppWrapper>
    <GlobalStyleEl
      styles={css`
        html {
          height: 100%;
        }
        body {
          height: 100%;
          margin: 0;
        }
        #root {
          height: 100%;
        }
      `}
    />
    <Header />
  </AppWrapper>
}

interface GlobalStyleElProps {
  styles: object
}

const GlobalStyleEl = styled(Global) <GlobalStyleElProps>``

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`

export default App