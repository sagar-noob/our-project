import React, { useState } from 'react';
import styled from  'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { MdAccessibilityNew } from "react-icons/md";
import { BiBed} from "react-icons/bi";
import { BiGrid} from "react-icons/bi";
import { BiUser} from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";







import { Sidebardata} from './Sidebardata'
import Submenu from './Submenu'

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
width: 250px ;
height: 100vh;
display: flex;
justify-content:center ;
position:fixed ;
top:0;
left: ${({ sidebar}) => (sidebar ? '0' : '-100%')} ;
transition:350ms ;
z-index:10 ;

`;

const SidebarWrap = styled.div`
width:100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    
    <Nav>

        <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>
        
    </Nav>
    <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
            <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
            </NavIcon>
            {Sidebardata.map((item, index) => {
                return <Submenu item={item} key={index} />;

            })}
        </SidebarWrap>
    </SidebarNav>
    </>
  );
};

export default Sidebar;
