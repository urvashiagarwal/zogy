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
                        <div id="logo" style={{ marginLeft: "280px", marginTop: "calc(-42px)" }} >
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
                    <div className="row m-div">

                        <div class="msg1" style={{ width: "67px" }}>
                            <img
                                src="data:image/png;base64,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"
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