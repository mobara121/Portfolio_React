import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';

const Ul =styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding-right: 30px;

    li{
        padding: 10px 20px;
        color: #fafafa;
        font-size:25px;
        background-color: transparent;
    }

    a{
        color: white;
        text-decoration: none;
    }
    span:hover { 
        border-radius: 25px;  
        padding: 5px 20px;  
        color: #fafafa;
        background-color: #9bcfde;
        -webkit-transform: scale(1.025);
        transform: scale(1.025);
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    @media (max-width: 768px){
        /* display: none; */
        flex-flow: column nowrap;
        background-color: grey;
        position: fixed;
        transform: ${({open}) => open ? 'transLateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 180px;
        padding-top: 3.5rem;
        transition: transform 0.3s  ease-in-out;
    }
`;

function RightNav({open}){
    return(
        <Ul open={open}>
            <li><a href="https://www.linkedin.com/in/mizueobara"><span>LinkedIn</span></a></li>
            <li><a href="https://github.com/mobara121?tab=repositories"><span>Github</span></a></li>
            <Contact>Contact</Contact>
        </Ul>
    );
}

export default RightNav;