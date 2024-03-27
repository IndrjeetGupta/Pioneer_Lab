
import React from 'react'
// import '../css/Cryptocurrency.css'
import '../css/main.css'
import 
 { BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <h1 style={{margin: "auto"}}>Welcome To Dashboard</h1>

    </header>
  )
}

export default Header
