import * as React from 'react'
import styled from "@emotion/styled"

export const SimulateNewSub = ({ socket }) => {

    const [sub, setSub] = React.useState('')

    const handleChange = (event) => {
        const sub = event.target.value
        setSub(sub)
    }

    const sendSub = () => socket.emit('sub', sub)

    return <WrapperSendSub>
        <CustomLabel>
            <SendSubLabel>Simulate new sub :</SendSubLabel>
            <CustomInput onChange={handleChange} />
            <button onClick={sendSub}>Simulate</button>
        </CustomLabel>
    </WrapperSendSub>
}

const SendSubLabel = styled.span`
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

const WrapperSendSub = styled.div`
    max-width: 20%;
    border: 2px solid #4a4a4a;
    border-radius: 5px;
    padding: 15px;
`