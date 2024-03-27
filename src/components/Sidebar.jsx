
import { FaBars, FaHome } from 'react-icons/fa';
import { RxHome } from "react-icons/rx";
import { LuHome } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { PiHourglassBold } from "react-icons/pi";
import 
 { BsJustify}
 from 'react-icons/bs'

import React from 'react'
// import '../css/Sidebar.css'
import '../css/main.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                {/* <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div> */}
            
                <span className='icon close_icon' onClick={OpenSidebar}> <BsJustify className='icon'/></span>
               
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <LuHome className='icon' /> Home
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <GoOrganization className='icon' /> Organization
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <FiBox className='icon' /> Assets
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <RiArrowUpDownLine className='icon' /> Trade
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <PiHourglassBold className='icon' /> History
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <IoWalletOutline className='icon' /> Wallet
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar