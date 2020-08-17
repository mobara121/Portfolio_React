import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
    width: 100%;
    height: 75px;
    /* border-bottom: 2px solid whitesmoke; */
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo{
        padding: 20px 30px;
        color: whitesmoke;
    }
`

function Topbar(){
    return(
        <Nav>
            <div className="logo">
                {/* MIZUE O'BARA */}
            </div>
            <Burger/>
        </Nav>

    );
}

export default Topbar;
