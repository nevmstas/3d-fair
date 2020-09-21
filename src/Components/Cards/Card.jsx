import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const CardContainer = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 0 0 5px 0.1px grey;
    margin: 30px;
    transition: all 0.2s;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 10px 0.1px grey;
    }
`
const ImageContainer = styled.div`
    height: 150px;
    background-color: #cc66ff;
    border-radius: 20px 20px 0 0;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
`
const MyNavLink = styled(NavLink)`
    text-decoration: none;
`
const Title = styled.h2`
    font-size: ${(props) => (props.len === 10 ? '25px' : '20px')};
`

export const Card = ({ title, desc, route }) => {
    const cutDesc = (desc) => {
        let result = ''
        if (desc.length > 50) {
            result = desc.slice(0, 45) + ' . . .'
            return result
        }
        return desc
    }

    return (
        <MyNavLink to={`component/${route}`}>
            <CardContainer>
                <ImageContainer>
                    {/* <img src="https://wallpapercave.com/wp/u9AVLry.jpg"></img> */}
                </ImageContainer>
                <Text>
                    <Title len={title.length}>{title}</Title>
                    <span>{cutDesc(desc)}</span>
                </Text>
            </CardContainer>
        </MyNavLink>
    )
}
