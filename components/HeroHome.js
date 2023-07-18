import { DownBanner } from "@/Home/DownBanner"
import { HeroAddress } from "@/Home/HeroAddress"
import { HeroBanner } from "@/Home/HeroBanner"
import { HeroFooter } from "@/Home/HeroFooter"
import { HeroImage } from "@/Home/HeroImage"
import { HeroThree } from "@/Home/HeroImage2"
import { HeroMenu } from "@/Home/HeroMenu"

export const HeroHome =()=>{
    return(
        <>
            <HeroBanner/>
            <HeroImage/>
            <div class="banner2">
                <div class="container">
                    <div class="row">
                        <div id="innerbnr">
                            <div class=" text">
                                <h1>$27</h1>
                                <h4>BEEF WITH GINGER</h4>
                                <h5>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor
                                    smart
                                    money hopes
                                    worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real
                                    less till
                                    dear
                                    read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</h5>
                                <h5>Image from <span id="freepik">Freepik</span></h5>
                            </div>

                            <div>
                                <img src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg" alt="img" id="photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeroThree/>
            <div class="banner3">
                <div class="container">
                    <div class="row">
                        <div id="innerbnr2">

                            <div>
                                <img src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3681641.jpeg" alt="img"
                                    id="photo2" />
                            </div>

                            <div class="text2">
                                <h1>$4</h1>
                                <h4>CROISSANT WITH TOPPING</h4>
                                <h5>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor
                                    smart money hopes
                                    worth too</h5>
                                <h5>Image from <span id="freepik">Freepik</span></h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <HeroMenu/>
            <div class="banner4">
                <div class="container">
                    <div class="row">
                        <div id="innerbnr4">

                            <div class=" text5">
                                <h1>$14</h1>
                                <h4>SALAD WITH CHICKEN</h4>
                                <h5>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor
                                    smart money hopes
                                    worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real
                                    less till dear
                                    read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</h5>
                                <h5>Image from <span id="freepik">Freepik</span></h5>
                            </div>

                            <div>
                                <img
                                    src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/fresh-salad-with-turkey-eggs-vegetables.jpg"
                                    alt="img" id="photo3" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <DownBanner/>
            <HeroAddress/>
            <HeroFooter/>
        </>
    )
}