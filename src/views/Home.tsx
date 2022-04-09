import { useState, useEffect } from "react";
import CarousellHome from "../components/Carousell/Carousel";
import About from "../components/About";
import Threapies from "../components/Therapies";

function Home(){
    return (
        <>
            <CarousellHome />
            <About />
            <Threapies />
        </>
    )
}

export default Home