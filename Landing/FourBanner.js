import { HeroAddress } from "@/Home/HeroAddress"

export const FourBanner = () => {


    return (
        <>
            <div className="footercards">
                <div className="d-flex justify-content-center cardimg">
                    <div className="c-img">

                    </div>
                    <div className="cardtext2">
                        <h5>OUR RESTAURANT</h5>
                        <h1>A new way to experience food</h1>
                        <h4>Image from <span>Freepik</span></h4>
                        <button>Read More</button>
                    </div>

                </div>

            </div>
            <div className="d-flex justify-content-center l-banner3">


                <div className="g-box">
                    <div>
                        <div id="logo" style={{ marginLeft: "315px", marginTop: "calc(-42px)" }} >
                            <h1>40%</h1>
                            <h4>Business lunch</h4>
                        </div>
                    </div>




                    <div className="txtbox" style={{ color: "white" }}>
                        <h5>SAMPLE HEADLINE</h5>
                        <h5 id="freepiktxt">Image from <span>Freepik</span></h5>
                        <h1>Our Contact</h1>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="h-box">
                    <div className="row" style={{ display: "flex-inline" }}>

                        <div class="msg1">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAA…CAMVVXPcDggB141O8d/8DVxpHDkPIoR0AAAAASUVORK5CYII="
                                alt="" id="icon1" />
                        </div>
                        <div>

                            <h5>CHART TO US</h5>
                            <h5>Our friendly team is here to help.</h5>
                            <a href="https://nicepage.best/">hi@ourcompany.com</a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}