import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../../commonStyles'

const HeaderContainer = styled.header``
const HeaderBtn = styled.a`
    background-color: #cc66ff;
    padding: 10px 10px 3px;
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
`
const LogoContainer = styled.div`
    h2 {
        color: #cc66ff;
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
        <HeaderContainer>
            <ContentWrapper>
                <HeaderWrapper>
                    <LogoContainer>
                        <h2>3d-fair</h2>
                    </LogoContainer>
                    <Navigation>
                        <ul>
                            <li>
                                <HeaderBtn href="!#">Components</HeaderBtn>
                            </li>
                            <li>
                                <HeaderBtn href="!#">About</HeaderBtn>
                            </li>
                        </ul>
                    </Navigation>
                </HeaderWrapper>
            </ContentWrapper>
        </HeaderContainer>
    )
}
