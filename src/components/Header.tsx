import * as React from 'react'
import styled from '@emotion/styled'
import colors from '../utils/colors'
import Twitch from '../assets/twitch.png'

interface IProps {
    tempContext: any
}

export const Header: React.FC<IProps> = ({ tempContext }) => {
    console.log(tempContext)
    return <ContainerHeader>
        <WrapperHeader>
            <TwitchImage src={Twitch} alt='twitch' />
            <Corner />
            <TestMessage>{tempContext?.message}</TestMessage>
        </WrapperHeader>
    </ContainerHeader>
}

const TestMessage = styled.span`
    position: relative;
    display: block;
    color: white;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

const Corner = styled.div`
    position: absolute;
    background-color: ${colors.dark};
    width: 50px;
    height: 50px;
    left: 50%;
    top: 45%;
    box-shadow: 1px 0px 16px 4px ${colors.dark};
    transform: translateX(-50%) rotate(45deg);
    border-radius: 5px;
`

const WrapperHeader = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const TwitchImage = styled.img`
    position: absolute;
    height: 90%;
    object-fit: contain;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
`

const ContainerHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: ${colors.dark};
    box-shadow: 1px 5px 16px 0px ${colors.dark};
    display: flex;
    justify-content: center;
    align-items: center;
`
