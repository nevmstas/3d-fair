import React from 'react'
import { Card } from './Card'
import { ContentWrapper } from '../../commonStyles'
import styled from 'styled-components'

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const CardsPage = () => {
    return (
        <ContentWrapper>
            <CardsWrapper>
                <Card
                    title={'Flying sponges'}
                    desc={'3d models of 3 sponges using react-spring'}
                    route={'FlyingSponges'}
                />
                <Card
                    title={'SpinerCube'}
                    desc={
                        '3d cube model with hover effectfsdflskfdl;k fsdkjfkdsjk fkjsdklfjsldjflk sjdflksjdflksdj f kfjdslkjfkldsjl'
                    }
                    route={'FlyingSponges'}
                />
                <Card
                    title={'SpinerCube'}
                    desc={'3d cube model with hover effect'}
                    route={'FlyingSponges'}
                />
                <Card
                    title={'SpinerCube'}
                    desc={'3d cube model with hover effect'}
                    route={'FlyingSponges'}
                />
                <Card
                    title={'SpinerCube'}
                    desc={'3d cube model with hover effect'}
                    route={'FlyingSponges'}
                />
                <Card
                    title={'SpinerCube'}
                    desc={'3d cube model with hover effect'}
                    route={'FlyingSponges'}
                />
            </CardsWrapper>
        </ContentWrapper>
    )
}
