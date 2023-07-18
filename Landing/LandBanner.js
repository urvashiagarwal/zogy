const LandingBanners = () => {
    return (
        <>
            <div className=" land">

                <div className=" l-banner">

                    <div className="ibox" style={{ display: "inline-flex" }}>
                        <div className="ibox-text">SAMPLE HEADLINE</div>
                        <div className="col-lg-3">
                            <div id="logo">
                                <h1>40%</h1>
                                <h4>Business lunch</h4>
                            </div>
                        </div>



                    </div>
                    <div className="txtbox">

                        <h5 id="freepiktxt">Image from <span>Freepik</span></h5>
                        <h1>Where every ingredient<br /> tells a story</h1>
                        <button>Read More</button></div>
                </div>
                <div className=" l-banner2">
                    <img src="https://cdn.pixabay.com/photo/2018/02/25/20/04/lambs-lettuce-3181610_640.jpg" alt="" />
                </div>
            </div>

        </>
    );
};

export default LandingBanners;
