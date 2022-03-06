import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const Sidebar = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconClosed: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Hospital Dashboard',
                path: '/Dshboard/Hospital Dashboard',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Covid-19 Dashboard',
                path: '/Dashboard/Covid-19 Dashboard',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Doctor',
        path: '/Doctor',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconClosed: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'All Doctor',
                path: '/Doctor/All Doctor',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Add doctor',
                path: '/Doctor/Add Doctor',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Appointment',
                path: '/Doctor/Appointment',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Doctor Schedule',
                path: '/Doctor/Doctor Schedule',
                icon: <IoIcons.IoIosPaper />,
            },

        ]
          },

        {
            title: 'Patient',
            path: '/Patient',
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownFill />,
            iconClosed: <RiIcons.RiArrowUpFill />,
            subNav: [
                {
                    title: 'Patient List',
                    path: '/Patient/Patient List',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Add Patient',
                    path: '/Patient/Add Patient',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Patient Profile',
                    path: '/Patient/Patient Profile',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Patient Invoices',
                    path: '/Patient/Patient Invoices',
                    icon: <IoIcons.IoIosPaper />,
                },
    
            ]
        },
        {
            title: 'Accidents',
            path: '/Accients'
        },
        {
            title: 'Labs',
            path: '/Labs'
        },
        {
            title: 'Department',
            path: '/Department'
        }
        
];  
