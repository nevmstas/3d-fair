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
`

interface PropsT {
    children: any
    desc: string
    title: string
    tech: string
}

export const ComponentPage: React.FC<PropsT> = ({
    children,
    desc,
    title,
    tech,
}) => {
    return (
        <ContentWrapper>
            <h1>{title}</h1>
            {children}
            <TextWrapper>
                <Block>
                    <h2>Description</h2>
                    <span>{desc}</span>
                </Block>
                <Block>
                    <h2>Technologies</h2>
                    <span>{tech}</span>
                </Block>
            </TextWrapper>
        </ContentWrapper>
    )
}
