import LandingBanners from "@/Landing/LandBanner"


export const AboutUs = () => {
    return (
        <>

            <div className=" about">

                <div className=" about-text">

                    <h5 style={{ fontWeight: "bold" }}>
                        OUR MISSION</h5>
                    <h1>About Us</h1>
                    <h5>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</h5>
                    <h5 id="freepiktxt">Image from <span style={{ color: "#f1ae0e" }}>Freepik</span></h5>
                    <button>Read More</button>
                </div>
                <div className="about-img">
                    <img src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables.jpg" alt="" className="about-img" />
                </div>
            </div>

            <div className="container-fluid abt-banner">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-1">

                        </div>
                        <div className="col col-lg-10 abt-inn">
                            <div className="abt-text">
                                <h1>We make a small, intimate, and inviting space for an unforgettable meal</h1>
                                <h5>Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</h5>
                                <button>Read More</button>
                            </div>
                        </div>
                        <div className="col col-lg-1"></div>
                    </div> </div>
            </div>

            <div className="conatainer abt-salad ">
                <div className="salad-img">
                    <img src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/high-angle-shot-vegetable-salad-white-bowl.jpg" alt="" style={{ height: "521px", width: "540px" }} className="salad-img" />
                </div>
                <div className="salad-text">

                </div>
            </div>

        </>
    )
}