
import { FaBars, FaHome } from 'react-icons/fa';
import { RxHome } from "react-icons/rx";
import { LuHome } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { PiHourglassBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsJustify }
    from 'react-icons/bs'

import React from 'react'
import '../css/main.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>

                <span className='icon close_icon' onClick={OpenSidebar}>X </span>


            </div>


            <div className='top-logo'
            >
                <div style={{ marginLeft: "10px", color: 'green' }}>

                    <h2>Carbon Cell</h2>

                </div>
                <div>
                    <BsJustify className='icon' />

                </div>

            </div>
            <div className='searchBox' style={{ display: "flex", position: "relative" }}>
                <div style={{ position: "absolute", left: '15px ', top: '6px' }}>
                    <svg style={{ height: "20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
                <input className='searchInput' style={{ paddingLeft: '30px' }} type="text" name="" id="" placeholder='Search' />
            </div>

 <br />

            <ul className='sidebar-list'  >
                <li className='sidebar-list-item' >
                    <a href="" >
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <li className='sidebar-list-item'>
                    <a href="">
                        <IoMdNotificationsOutline className='icon' /> Notifictions
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <MdContactSupport className='icon' /> Support
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <IoSettingsOutline className='icon' /> Setting
                    </a>
                </li>
                <br />
                <div className='details'>
                    <div>
                        <img className='dummyImg'

                            src="https://p.kindpng.com/picc/s/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
                            alt="" />
                    </div>
                    <div>
                        <h4 >Brookly Simmons</h4>
                        <p>brookly@gmail.com</p>
                    </div>
                    <div>
                        <BsThreeDotsVertical />
                    </div>

                </div>

            </ul>
            <div >

            </div>
        </aside>
    )
}

export default Sidebar