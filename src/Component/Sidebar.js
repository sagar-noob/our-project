import React from 'react'
import styled from  'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: ccenter;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display:flex;
justify-content: flex-start;
align-items: center;
`;
const SidebarNav = styled.nav`
background: #15171c;

`;

const SidebarWrap = styled.div`
width:100%;
`;

const Sidebar = () => {
  return (
    <>
    <Nav>
        <NavIcon to='#'>
            <FaIcons.FaBars/>
        </NavIcon>
    </Nav>
    <SidebarNav>
        <SidebarWrap>
            <NavIcon to='#'>
                <AiIcons.AiOutlineClose/>
            </NavIcon>
        </SidebarWrap>
    </SidebarNav>
    </>
  )
}

export default Sidebar