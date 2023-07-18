export const LandCards = () => {



    return (
        <>
            <div className="cards">
                <div className="d-flex justify-content-center cardimg">
                    <div className="c-img">

                    </div>
                    <div className="cardtext">
                        <h5>OUR RESTAURANT</h5>
                        <h1>A culinary adventure for all the senses</h1>
                        <h4>Image from <span>Freepik</span></h4>
                        <button>Read More</button>
                    </div>

                </div>

            </div>

            <div className="cards">
                <div className="d-flex justify-content-center cardimg2">
                    <div className="cardtext2">
                        <h5>OUR RESTAURANT</h5>
                        <h1>The magic of the kitchen</h1>
                        <h4>Image from <span>Freepik</span></h4>
                        <button>Read More</button>
                    </div>
                    <div className="c-img">
                        {/* <img src="https://cdn.pixabay.com/photo/2017/05/30/23/12/salad-2358532_640.jpg" alt="" /> */}
                    </div>

                </div>

            </div>

        </>
    )
}