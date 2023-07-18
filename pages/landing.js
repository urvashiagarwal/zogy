import { HeroMenu } from '@/Home/HeroMenu'
import LandingBanners from '@/Landing/LandBanner'
import React from 'react'

const Landing = () => {

    const data = {
        value: "white",
        textcolor: "black",
        text4clr: "black",
        margin: "calc(-40px)",
        clr: "black",
        imgheight: "295px",
        imgwidth: "336px",
        imgpadding: "270px",
        margintop: "calc(-300px)",
        marginbtw: "100px",
        marginleft: "calc(-0px)",
        topgap: "calc(-70px)",
        marginbtm: "calc(-280px)"

    }
    return (
        <>
            <LandingBanners />
            <HeroMenu {...data} />
            


        </>
    )
}

export default Landing