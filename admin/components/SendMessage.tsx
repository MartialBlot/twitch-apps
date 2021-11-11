import * as React from 'react'
import styled from "@emotion/styled"

export const SendMessage = ({ socket }) => {
    const [message, setMessage] = React.useState({} as any)

    const handleChange = (event) => {
        const text = event.target.value
        setMessage(e => ({
            ...e,
            text: text
        }))
    }

    const handleSelect = (event) => {
        const target = event.target.value
        setMessage(e => ({
            ...e,
            target: target
        }))
    }

    const sendMessage = () => socket.emit('message', JSON.stringify(message))

    return <WrapperSendMessage>
        <CustomLabel>
            <SendMessageLabel>Send message to client:</SendMessageLabel>
            <select onChange={handleSelect}>
                <option value="">Select your target</option>
                <option value="header">header</option>
                <option value="background">background</option>
            </select>
            <CustomInput onChange={handleChange} />
            <button disabled={!message?.text || !message?.target} onClick={sendMessage}>Send</button>
        </CustomLabel>
    </WrapperSendMessage>
}

const SendMessageLabel = styled.span`
    display: block;
    text-align: center;
`

const CustomInput = styled.input`
    margin: 20px 0;
`

const CustomLabel = styled.label`
    display: flex;
    flex-direction: column;
`

const WrapperSendMessage = styled.div`
    max-width: 20%;
    border: 2px solid #4a4a4a;
    border-radius: 5px;
    padding: 15px;
`