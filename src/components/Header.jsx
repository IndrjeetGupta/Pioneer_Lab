
import React from 'react'
import 
 { BsJustify}
 from 'react-icons/bs'
 import '../css/main.css'
 

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <h1 style={{margin: "auto", color: 'green', justifyContent: 'space-around'}}>Admin Dashboard</h1>

    </header>
  )
}

export default Header
