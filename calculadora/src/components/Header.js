import React from 'react';
import styled from 'styled-components';
import logo from '../img/emix-logo.png'

const PageHeader = styled.header`
    background-color: #006a6a;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20.4vw;
    padding: 2vh 0;
`

const Logo = styled.img`
    height: auto;
    width: 36%;
`

function Header() {
    return (
        <PageHeader>
            <Logo src={logo} alt={"Logo da empresa"} />
        </PageHeader>
    );
}

export default Header;