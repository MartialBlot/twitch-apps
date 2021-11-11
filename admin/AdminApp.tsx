import * as React from 'react'
import styled from '@emotion/styled'
import { Global, css, keyframes } from '@emotion/react'
import { SendMessage } from './components/SendMessage'
import { SimulateNewSub } from './components/SimulateNewSub'
import io from 'socket.io-client'
import TwitchLogo from './assets/twitch_logo.svg'

const AdminApp = () => {
  const socket = io(`http://localhost:3001`)

  return <WrapperAdmin>
    <GlobalStyleEl
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
        html {
          height: 100%;
        }
        body {
          height: 100%;
          margin: 0;
          font-family: 'Comfortaa', cursive;
        }
        #rootAdmin {
          height: 100%;
        }
      `}
    />
    <SendMessage socket={socket} />
    <SimulateNewSub socket={socket} />
    <WrapperLogo>
      <TwitchLogo width={100} height={50} />
    </WrapperLogo>
  </WrapperAdmin>
}

const animationLogo = keyframes`
  0%{
    transform: rotateY(0);
  }
  100%{
    transform: rotateY(360deg);
  }
`

const WrapperLogo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  transform: rotateY(0);
  animation: ${animationLogo} 3000ms ease-in-out infinite;
  transform-style: preserve-3d;
  will-change: transform;
`

interface GlobalStyleElProps {
  styles: object
}

const GlobalStyleEl = styled(Global) <GlobalStyleElProps>``

const WrapperAdmin = styled.div`
  width: 100%;
  height: 100%;
`

export default AdminApp