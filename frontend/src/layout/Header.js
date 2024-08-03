import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const { pathname } =  useLocation();
  const [ showNavMenu, setShowNavMenu ] = useState(false)

  const menuRef = useRef(null); // Create a ref for the menu
  const menuIcon = useRef(null) // Create a ref for the menu icon

  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the menu except menu icon
    if (menuRef.current && !menuRef.current.contains(event.target) && !menuIcon.current.contains(event.target)) {
      setShowNavMenu(false); // Close the menu
    }
  };
  
  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navs = [
    { name: "Home", to: '/', style: pathname == '/' ? 'navigation-box-link active': 'navigation-box-link' },
    { name: "About", to: '/about', style: pathname == '/about' ? 'navigation-box-link active': 'navigation-box-link' },
    { name: "Services", style: pathname == '/blockchain' || pathname == '/software' ? 'navigation-box-link active': 'navigation-box-link',
      childs: [ { name: 'Blockchain', to: '/blockchain' }, { name: 'Software', to: '/software' }, ]
    },
    { name: "Portfolio", to: '/portfolio', style: pathname == '/portfolio' ? 'navigation-box-link active': 'navigation-box-link' },
    { name: "Careers", to: '/careers', style: pathname == '/careers' ? 'navigation-box-link active': 'navigation-box-link' },
    { name: "Blogs", to: '/blogs', style: pathname == '/blogs' ? ' navigation-box-link active': 'navigation-box-link' },
    { name: "Contact", to: '/contact', style: pathname == '/contact' ? 'navigation-box-link active': 'navigation-box-link' },
  ]
  const navsClass = showNavMenu ? 'header-nav-menu dark:bg-[#183874] fixed transition-all header-active duration-500' : 'header-nav-menu fixed transition-all h-0 duration-500'
  return (
    <>
      <header id="header_container" className="header-container">
        <div className="header-inner">
          <span>
            <img src="./img/solicy-logo.svg" alt="logo" />
          </span>
          <nav className="navigation-box">
            <ul className="navigation-box-ul">
              {navs.map((nav, idx) => (
                !nav.childs ? 
                  <li key={`menu_list_${idx+1}`}>
                    <Link className="navigation-box-link" to={nav.to} key={`header_menu_${idx+1}`}>
                      <span className={nav.style}> {nav.name} </span>
                    </Link>
                  </li> : 
                  <li key={`menu_list_${idx+1}`}>
                    <Link className="navigation-box-link" to="/">
                      <span className={nav.style} style={{marginBottom: 20}}>
                        <div className="header-dropdown">
                          <Space>
                            Services
                            <DownOutlined />
                          </Space>
                          <div className="header-dropdown-content">
                            {nav.childs.map((child, counter) => (
                              <Link to={child.to}  key={`header_menu_${counter+1}`}>
                                <span> {child.name} </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </span>
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
          <div className="header-nav-menu-button">
              <div className="text-white" ref={menuIcon}>
                <button onClick={() => setShowNavMenu(prev => !prev)}> <MenuIcon style={{fontSize: 26}}/></button>
              </div>
          </div>
        </div>
      </header>
      <div className={navsClass}>
        <div className='header-navigation-list' ref={menuRef}>
            {navs.map((nav, idx) => 
                !nav.childs ?
                <Link to={nav.to} key={`nav_item_${idx}`} onClick={() => setShowNavMenu(!showNavMenu)}>
                  <span key={`nav_item_${idx}`} className={nav.style}>{nav.name}</span>
                </Link> :
                <span className={nav.style} style={{lineHeight: 0}}>
                  <div className="header-dropdown" style={{height: 30}}>
                      <Space>
                      Services
                      <DownOutlined />
                      </Space>
                      <div className="header-dropdown-content" style={{marginTop: -5, marginLeft: -58}}>
                      {nav.childs.map((child, counter) => (
                        <Link to={child.to} key={`nav_item_${counter}`} onClick={() => setShowNavMenu(!showNavMenu)}>
                          <span style={{color: '#444'}}>{child.name}</span>
                        </Link>
                      ))}
                      </div>
                  </div>
                </span>
            )}
        </div>
        </div> 
    </>
  )
}

export default Header