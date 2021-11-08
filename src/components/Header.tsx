import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Header = () => {

    return <WrapperHeader>
        <Text>
            Live onAir Goo
        </Text>
    </WrapperHeader>
}

const WrapperHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
`

const animation = keyframes`
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.5)
    }
    100% {
        transform: scale(1)
    }
`

const Text = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: blueviolet;
    animation: ${animation} 1s linear infinite;
`