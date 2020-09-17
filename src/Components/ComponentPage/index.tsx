import React from 'react'
import { ContentWrapper } from '../../commonStyles'
import { FlyingSponges } from '../3dComponents/FlyingSponges'
import { SpinnerCube } from '../3dComponents/SpinnerCube'

import styled from 'styled-components'

const Padding = styled.div`
    display: flex;
`

export const ComponentPage = () => {
    return (
        <ContentWrapper>
            <Padding>
                <FlyingSponges />
            </Padding>
            {/* <SpinnerCube /> */}
        </ContentWrapper>
    )
}
