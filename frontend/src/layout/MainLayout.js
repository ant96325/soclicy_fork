import { useReducer, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import ThemeButton from "./ThemeButton";
import ChatUs from "./ChatUs";
import ChatPage from '../components/chatus/ChatPage'

const MainLayout = () => {
  const { pathname } = useLocation()
  return (
    <>
      {
        pathname === '/chatus' ?
          <ChatPage />
        :
        <>
          <Header />
          <Outlet />
          <Footer />
          <ThemeButton />
          <ChatPage />
        </>
      }
    </>
  )
};

export default MainLayout;