import React from 'react'
import { ContentWrapper } from '../../commonStyles'
import { FlyingSponges } from '../3dComponents/FlyingSponges'
import { SpinnerCube } from '../3dComponents/SpinnerCube'

import styled from 'styled-components'

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    color: #cc66ff;
    max-width: 400px;
`
const Title = styled.h1`
    color: #cc66ff;
    text-align: center;
`

const BackBtn = styled.button`
    background-color: #cc66ff;
    padding: 10px;
    border-radius: 10px;
    color: white;
    text-decoration: none;
    font-weight: 900;
    transition: all 0.3s;
    border: none;

    &:hover {
        background-color: #e6e6e6;
        color: #cc66ff;
        cursor: pointer;
    }
`

interface PropsT {
    children: any
    desc: string
    title: string
    tech: Array<string>
}

export const ComponentPage: React.FC<PropsT> = ({
    children,
    desc,
    title,
    tech,
}) => {
    return (
        <ContentWrapper>
            <Title>{title}</Title>
            {children}
            <TextWrapper>
                <Block>
                    <h2>Description:</h2>
                    <span>{desc}</span>
                </Block>
                <Block>
                    <h2>Technologies:</h2>
                    <ul>
                        {tech.map((t) => {
                            return <li>{t}</li>
                        })}
                    </ul>
                </Block>
            </TextWrapper>
        </ContentWrapper>
    )
}
