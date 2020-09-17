import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../../commonStyles'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    height: 500px;
    background-image: linear-gradient(to bottom, #ffffff, #ffe6ff);
    h1 {
        color: #cc66ff;
    }
`

export const Home = () => {
    return (
        <ContentWrapper>
            <Container>
                <h1>Lets create the best 3d components with me!</h1>
            </Container>
        </ContentWrapper>
    )
}
