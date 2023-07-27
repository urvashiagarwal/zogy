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
                    <div className="row" style={{ display: "flex" }}>

                        <div class="col col-2 msg">
                            <img
                                src="data:image/png;base64,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"
                                alt="" id="icon1" />
                        </div>
                        <div className="col col-10">

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