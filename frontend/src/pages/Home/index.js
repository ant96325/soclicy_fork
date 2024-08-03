import React from "react";
import { Row, Col, Flex, Divider } from "antd";
import IntroHome from "./IntroHome";
import Achievements from './Achievements'
import OurClient from "./OurClient";
import About from "./About";
import OurService from "./OurService";
import TechStack from "./TechStack";
import Join from "./Join";
const Home = () => {
    return (
        <div className="m-auto">
            <IntroHome />
            <Achievements />
            <OurClient />
            <About />
            <OurService />
            <TechStack />
            <Join />
        </div>
    )
}

export default Home