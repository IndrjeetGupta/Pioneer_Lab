
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
import { BsJustify }
    from 'react-icons/bs'

import React from 'react'
// import '../css/Sidebar.css'
import '../css/main.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                {/* <div className='sidebar-brand'>
                <BsJustify  className='icon_header'/> SHOP
            </div> */}


                <span className='icon close_icon' onClick={OpenSidebar}>X </span>
                {/* <BsJustify className='icon'/> */}

            </div>

            {/* .top-logo{
    display: flex;
    align-items: center;
    gap: -300px;
    /* justify-content: space-evenly; */
  } 

            <div className='top-logo'
            style={{display:'flex'}} >
                <div>
                    <img style={{width:"40%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j_s20MSKf0E61Y6lIlAwO4rkFlNj4NYs25J8aVyws3w7r683i_rXAbbw0xMXUF7VxH8&usqp=CAU" />
                </div>
                <div>
                <BsJustify className='icon'/>

                </div>

            </div>
            <div className='searchBox' style={{display: "flex" , position: "relative"}}>
                <div  style={{  position: "absolute" ,left: '15px ', top:'6px'}}>
                    <svg style={{height: "20px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
                <input className='searchInput' style={{paddingLeft: '30px'}} type="text" name="" id="" placeholder='Search' />
            </div>



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
                <li className='sidebar-list-item'>
                    <a href="">
                        <IoWalletOutline className='icon' /> Wallet
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <IoWalletOutline className='icon' /> Wallet
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <IoWalletOutline className='icon' /> Wallet
                    </a>
                </li>
                <br />
                <div className='details'>
                    <div>
                        <img className='dummyImg'
                         
                        src="data:image/jpeg;base64,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"
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