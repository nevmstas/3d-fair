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
`
const MyNavLink = styled(NavLink)`
    text-decoration: none;
`

interface PropsT {
    title: string
    desc: string
}

export const Card: React.FC<PropsT> = ({ title, desc }) => {
    return (
        <MyNavLink to={`component/${1}`}>
            <CardContainer>
                <ImageContainer>
                    {/* <img src="https://wallpapercave.com/wp/u9AVLry.jpg"></img> */}
                </ImageContainer>
                <Text>
                    <h2>{title}</h2>
                    <span>{desc}</span>
                </Text>
            </CardContainer>
        </MyNavLink>
    )
}
