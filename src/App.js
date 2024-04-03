import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Population from './components/Population';
import { useState } from 'react';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  console.log(openSidebarToggle)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Population/>

    </div>
  );
}

export default App;

