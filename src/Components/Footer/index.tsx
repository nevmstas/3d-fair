import React from 'react'
import styled from 'styled-components'

const MyFooter = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    color: red;
    text-align: center;

    box-shadow: 0 2px 20px 5px #cc66ff;
    padding: 0px 10px 0px 10px;
`

export const Footer = () => {
    return <MyFooter>Footer</MyFooter>
}
