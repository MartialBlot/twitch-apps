import * as React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import io from 'socket.io-client'

const AdminApp = () => {
  const [message, setMessage] = React.useState('')

  const socket = io(`http://localhost:3001`)

  const handleChange = (event) => {
    const message = event.target.value
    setMessage(message)
  }

  const sendMessage = () => socket.emit('message', `{"message": "${message}"}`)

  return <WrapperAdmin>
    <GlobalStyleEl
      styles={css`
        html {
          height: 100%;
        }
        body {
          height: 100%;
          margin: 0;
        }
        #rootAdmin {
          height: 100%;
        }
      `}
    />
    <label>
      Send message to client:
      <input onChange={handleChange} />
      <button onClick={sendMessage}>Send</button>
    </label>
  </WrapperAdmin>
}

interface GlobalStyleElProps {
  styles: object
}

const GlobalStyleEl = styled(Global) <GlobalStyleElProps>``

const WrapperAdmin = styled.div`
  width: 100%;
  height: 100%;
`

export default AdminApp