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

                    <IoSearch className='icon'></IoSearch>


                </div>
                <input className='searchInput' style={{ paddingLeft: '30px' }} type="text" name="" id="" placeholder='Search' />
            </div>

            <br />

            <ul className='sidebar-list'  >
                <li className='sidebar-list-item' >
                 
                        <LuHome className='icon' /> Home
                  
                </li>
                <li className='sidebar-list-item'>
                   
                        <GoOrganization className='icon' /> Organization
                    
                </li>
                <li className='sidebar-list-item'>
                    
                        <FiBox className='icon' /> Assets
                   
                </li>
                <li className='sidebar-list-item'>
                    
                        <RiArrowUpDownLine className='icon' /> Trade
                   
                </li>
                <li className='sidebar-list-item'>
                   
                        <PiHourglassBold className='icon' /> History
                  
                </li>
                <li className='sidebar-list-item'>
                   
                        <IoWalletOutline className='icon' /> Wallet
                
                </li>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                    
                </div>
                <li className='sidebar-list-item'>
                    
                        <IoMdNotificationsOutline className='icon' /> Notifictions
                   
                </li>
                <li className='sidebar-list-item'>
                   
                        <MdContactSupport className='icon' /> Support
                  
                </li>
                <li className='sidebar-list-item'>
                    
                        <IoSettingsOutline className='icon' /> Setting
                 
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