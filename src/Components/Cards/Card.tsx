import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const CardContainer = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 0 0 10px 0.1px grey;
    margin: 30px;
    transition: all 0.2s;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 10px 0.1px grey;
    }
`
const ImageContainer = styled.div``
const Text = styled.div``

export const Card = () => {
    return (
        <NavLink to={`component/${1}`}>
            <CardContainer>
                <ImageContainer>
                    {/* <img src="https://wallpapercave.com/wp/u9AVLry.jpg"></img> */}
                </ImageContainer>
                <Text>
                    <h1>Text</h1>
                    <span>Description text</span>
                </Text>
            </CardContainer>
        </NavLink>
    )
}
