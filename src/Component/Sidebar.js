import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Sidebardata } from './Sidebardata';


import Submenu from './Submenu'


const Nav = styled.div`

background:#0a9396;
height: 70px;
display: flex;
position:fixed;


`;

const NavIcon = styled(Link)`
margin-left: 2rem;
width: 260px;
font-size: 2rem;
height: 80px;
display:flex;
justify-content: flex-start;
align-items: center;
color: #001233;




`;
const SidebarNav = styled.nav`
background: #0a9396;
width: 230px ;
height: 100vh;
display: flex;
flex-shrink: 0;
justify-content:center ;
position:fixed ;
margin-left: auto;
overflow: auto;
top:0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')} ;
transition:350ms ;
z-index:10 ;


`;

const SidebarWrap = styled.div`
width:100%;

`;

const Sidebar = () => {
    
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    let u = "user";
    return (
        <>

            <Nav>

                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                     
                 </NavIcon>
                 <div style={{align:'center', dispaly:'flex',marginLeft: "900px" ,height:"40px" ,width:"100px",marginTop: "18px"  }}>
                  
                    <button type="button"  className="btn btn-info">Logout</button>
                    </div>
                
               

            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
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
