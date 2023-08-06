
import { useEffect, useState } from "react"

export const HeroMenu = (props) => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)

    const ApiData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://training-project.onrender.com/foods", requestOptions)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setStatus(true)
            })
            .catch(error => console.log('error', error));
    }

     // Add state to track the window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        ApiData()
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (

        <>
            <div class="menu" style={{ backgroundColor: `${props.value}` }}>
                <div class="container">
                    <div class="row">
                        <div class="col col-12" id="text3" style={{ color: `${props.textcolor}`, marginTop: `${props.margin}` }}>
                            View Our Menu
                        </div>

                        <div class="col col-12" id="text4" style={{ color: `${props.text4clr}` }}>Sample text. Click to select the Text Element. Image from <span
                            id="freepik1">Freepik</span>
                        </div>
                    </div>


                    <div className="container">
                        {status ?
                            <div className="row menuimg" style={{ padding: `${props.imgpadding}`, marginTop: `${props.margintop}`, marginBottom: `${props.marginbtm}` }} >
                                {data.map((items) => (
                                    <div className=" col-sm-12 col-md-12 col-lg-6">
                                        <div id="menupic" style={{ backgroundImage: `url(${items.image})`, height: `${props.imgheight}`, width: `${props.imgwidth}`, margin: `${props.marginbtw}`, marginLeft: `${props.marginleft}` }} className="bgimg">
                                            {/* <img src={items.image} style={{width:"18rem"}}  alt="" /> */}
                                        </div>
                                        <div className="menutxt" style={{ marginTop: `${props.topgap}` }}>
                                            <div  >
                                                <h4 style={{ color: `${props.text4clr}` }}>{items.name}</h4>
                                            </div>

                                            <button >Read More</button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            : <h4>Loading...</h4>
                        }
                    </div>






                </div>



            </div>

        </>
    )
}