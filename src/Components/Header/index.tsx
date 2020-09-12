import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../../commonStyles'
import { Card } from '../Cards/Card'
import { NavLink } from 'react-router-dom'

const HeaderContainer = styled.header`
    box-shadow: 0 -15px 12px 10px #cc66ff;
    padding: 0px 10px 0px 10px;
`

const NavItem = styled.div`
    a {
        background-color: #cc66ff;
        padding: 10px;
        border-radius: 10px;
        color: white;
        text-decoration: none;
        font-weight: 900;
        transition: all 0.3s;

        &:hover {
            background-color: #e6e6e6;
            color: #cc66ff;
            cursor: pointer;
        }
    }
`
const LogoContainer = styled.div`
    a {
        text-decoration: none;
        color: #cc66ff;
        font-size: 25px;
        font-weight: 900;
    }
`
const Navigation = styled.nav`
    ul {
        display: flex;
        display: wrap;
        list-style: none;
        li:not(:last-child) {
            margin-right: 30px;
        }
    }
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <ContentWrapper>
                    <HeaderWrapper>
                        <LogoContainer>
                            <NavLink to="/">3d-fair</NavLink>
                        </LogoContainer>
                        <Navigation>
                            <ul>
                                <li>
                                    <NavItem>
                                        <NavLink to="/components">
                                            Components
                                        </NavLink>
                                    </NavItem>
                                </li>
                                <li>
                                    <NavItem>
                                        <NavLink to="/About">About</NavLink>
                                    </NavItem>
                                </li>
                            </ul>
                        </Navigation>
                    </HeaderWrapper>
                </ContentWrapper>
            </HeaderContainer>
        </>
    )
}
