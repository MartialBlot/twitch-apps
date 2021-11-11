import * as React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { Header, TestMessage } from './components/Header'
import { Sub } from './components/Sub'
import colors from './utils/colors'
import Particles from "react-tsparticles"
import io from 'socket.io-client'

const App = () => {
  const [tempContext, setTempContext] = React.useState({} as any)
  const [newSub, setNewSub] = React.useState(null as any)

  React.useEffect(() => {
    const socket = io(`http://localhost:3000`)
    socket.on('message', (msg) => {
      const message = JSON.parse(msg)
      setTempContext(message)
    })
    socket.on('sub', (sub) => {
      setNewSub(sub)
    })
  }, [])

  React.useEffect(() => {
    if (!newSub) return
    setTimeout(() => setNewSub(null), 3000)
  }, [newSub])

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
          overflow: hidden;
        }
        #root {
          height: 100%;
        }
      `}
    />
    <Particles id="tsparticles" url="https://firebasestorage.googleapis.com/v0/b/twitch-overlay-d34d6.appspot.com/o/effects%2Fparticules.json?alt=media" />
    <BackgroundMessage>{tempContext?.target === 'background' && tempContext?.text}</BackgroundMessage>
    <Header tempContext={tempContext} />
    {
      newSub &&
      <Sub newSub={newSub} />
    }
  </AppWrapper>
}

const BackgroundMessage = styled(TestMessage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

interface GlobalStyleElProps {
  styles: object
}

const GlobalStyleEl = styled(Global) <GlobalStyleElProps>``

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.darkLight};
`

export default App