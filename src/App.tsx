import * as React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { Header } from './components/Header'
import { Sub } from './components/Sub'

const App = () => {

  return <AppWrapper>
    <GlobalStyleEl
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        html {
          height: 100%;
        }
        body {
          height: 100%;
          margin: 0;
          font-family: 'Press Start 2P', cursive;
        }
        #root {
          height: 100%;
        }
      `}
    />
    <Header />
    <Sub />
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