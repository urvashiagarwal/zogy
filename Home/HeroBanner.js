import React from "react";

export const HeroBanner = () => {
    return (
        <>
            <section>
                <div className="container-fluid banner">
                    <div className="row">

                        <div className="col col-lg-1 col-md-1 col-sm-1">

                        </div>

                        <div className=" col col-lg-5 col-md-10 col-sm-10 lunch ">
                            <div id="circle">
                                <div>
                                    <h2>40%</h2>
                                    <h3>BUSINESS LUNCH</h3>
                                </div>
                            </div>
                            <h4>new restaurant</h4>
                            <h1>Where every <br /> ingredient <br /> tells a story</h1>
                            <h5>Image From <span>Freepik</span></h5>
                            <a href="https://nicepage.com/c/video-website-mockup" target="_blank" rel="noopener noreferrer"><button >Read More</button></a>
                        </div>

                        <div className="col col-lg-6 col-md-1 col-sm-1 ">

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroBanner;
