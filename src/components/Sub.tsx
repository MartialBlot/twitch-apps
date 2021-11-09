import * as React from 'react'
import styled from '@emotion/styled'
import colors from '../utils/colors'
import Boom from '../assets/boom.svg'
import { generateRandomColor } from '../utils/functions'
import { keyframes } from '@emotion/react'

export const Sub = () => {
    const [randomColor, setRandomColor] = React.useState(generateRandomColor)
    const [showViewer, setShowViewer] = React.useState(false)

    React.useEffect(() => {
        const getRandomColor = setInterval(() => {
            const color = generateRandomColor()
            setRandomColor(color)
        }, 100)
        return () => clearInterval(getRandomColor)
    }, [])

    const handleAnimationEnded = () => setShowViewer(true)

    return <ContainerSub>
        <WrapperSub>
            <BoomSvg onAnimationEnd={handleAnimationEnded} />
            {
                showViewer && <WrapperViewer>
                    <Viewer color={randomColor}>MartyOldson</Viewer>
                    <SubText color={randomColor}>subs (5 months)</SubText>
                </WrapperViewer>
            }
        </WrapperSub>
    </ContainerSub>
}

const WrapperViewer = styled.div`
    
`

const boomAnimation = keyframes`
    0% {
        transform: scale(0) translateY(-100%);
        opacity: 1;
    }
    40% {
        transform: scale(1) translateY(-100%);
        opacity: 1;
    }
    60% {
        transform: scale(0.8) translateY(-100%);
        opacity: 1;
    }
    80% {
        transform: scale(1.1) translateY(-100%);
        opacity: 0.6;
    }
    100% {
        transform: scale(1) translateY(-100%);
        opacity: 0;
    }
`

const BoomSvg = styled(Boom)`
    position: absolute;
    width: 150px;
    height: 120px;
    opacity: 0;
    transform: scale(1) translateY(-100%);
    animation: ${boomAnimation} 1000ms ease-in-out;
`

const Viewer = styled.span`
    position: relative;
    display: block;
    color: ${({ color }) => color};
    transition: all 300ms ease-in-out;
`

const SubText = styled.span`
    position: relative;
    display: block;
    color: ${({ color }) => color};
    transition: all 300ms ease-in-out;
`

const WrapperSub = styled.div`
    position: relative;
`

const ContainerSub = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`
