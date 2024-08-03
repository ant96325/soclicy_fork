import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/App.css';
import './style/util.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from './pages/About'
import BlockChain from './pages/Service/BlockChain'
import Software from './pages/Service/Software'
import Portfolio from './pages/Portfolio'
import Careers from './pages/Careers'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ChatPage from './components/chatus/ChatPage'
import '@fontsource/inter'
import '@fontsource/quicksand'
import '@fontsource/quantico'
import { Provider } from 'react-redux'
import { store } from './store'
import { createContext, useState } from "react";
import AppContext from "./AppContext";

function App() {
  const [sizeX, setSizeX] = useState(0)
  const [sizeY, setSizeY] = useState(0)

  const setSizeExpand = () => {
    setSizeX(540)
    setSizeY(747)
  }
  const setSizeDefault = () => {
    setSizeX(0)
    setSizeY(0)
  }
  return (
    <AppContext.Provider value={{sizeX, sizeY, setSizeExpand, setSizeDefault}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blockchain" element={<BlockChain />} />
            <Route path="software" element={<Software />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="careers" element={<Careers />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="chatus" element={<ChatPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
