import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import { MdAccessibilityNew } from "react-icons/md";
import { BiBed} from "react-icons/bi";
import { BiGrid} from "react-icons/bi";
import { BiUser} from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

export const Sidebardata = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Hospital Dashboard',
                path: '/Dshboard/Hospital Dashboard',
                
            },
            {
                title: 'Covid-19 Dashboard',
                path: '/Dashboard/Covid-19 Dashboard',
            
            },
        ]
    },
    {
        title: 'Doctor',
        path: '/Doctor',
        icon: <BiUser />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'All Doctor',
                path: '/Doctor/All Doctor',
                
            },
            {
                title: 'Add doctor',
                path: '/Doctor/Add Doctor',
                
            },
            {
                title: 'Appointment',
                path: '/Doctor/Appointment',
                
            },
            {
                title: 'Doctor Schedule',
                path: '/Doctor/Doctor Schedule',
                
            },

        ]
          },

        {
            title: 'Patient',
            path: '/Patient',
            icon: <MdAccessibilityNew />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Patient List',
                    path: '/Patient/Patient List',
                    
                },
                {
                    title: 'Add Patient',
                    path: '/Patient/Add Patient',
                    
                },
                {
                    title: 'Patient Profile',
                    path: '/Patient/Patient Profile',
                    
                },
                {
                    title: 'Patient Invoices',
                    path: '/Patient/Patient Invoices',
                    
                },
    
            ]
        },
        {
            title: 'Accidents',
            path: '/Accients',
            icon: <BiBed/>

        },
        {
            title: 'Labs',
            path: '/Labs',
            icon: <AiFillEdit/>
            
        },
        {
            title: 'Department',
            path: '/Department',
            icon: <BiGrid/>
        }
        
];  
