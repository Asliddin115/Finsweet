import Card from "./Img/Card.png"
import Small from "./Img/Small.png"
import Card2 from "./Img/Card2.png"
import Bg1 from "./Img/Bg1.png"
import Bg2 from "./Img/Bg2.png"

function Project() {
    return (
        <div className="Project">
            <div className="container">
                <div className="Pro_titles">
                    <h1 className="Pro_titile1">View our projects</h1>
                    <h3 className="Pro_title2"> <a href="#">View More</a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                        <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
                    </svg></h3>
                </div>

                <div className="Pro_imgs">

                    <div className="Pro_img_big">
                        <img src={Card} alt="" />

                        <div className="card1_bg">
                            <img src={Bg1} alt="" />
                        </div>
                        <h1 className="big_img_title">
                            Workhub office Webflow Webflow Design
                        </h1>
                        <p className="big_img_text">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
                        </p>
                        <p className="big_img_next">
                            <a href="#">View project<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980" />
                            </svg></a>
                        </p>

                    </div>

                    <div className="Pro_img_small">
                        <div className="small_bg">
                            <img src={Small} alt="" />
                            <div className="Bg2">
                                <img src={Bg2} alt="" />
                            </div>

                            <h1 className="small_title">Unisaas Website
                                Design</h1>
                            <p className="small_text">
                                <a href="#"> View portfolio<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980" />
                                </svg></a>
                               
                            </p>
                        </div>

                        <img src={Card2} alt="" />

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Project;