import One from "./Img/one.svg"
import Two from "./Img/two.png"
import Tree from "./Img/tree.png"
import Four from "./Img/four.png"


function Header2() {
    return (
        <div className="Haeder2">
            <div className="container">
                <div className="Herder2_content">
                    <div className="How">
                        <h1 className="How_title">How we work</h1>
                        <p className=" How_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div className="next_show">
                            <h3 className="How_show"> <a href="#">Get in touch with us</a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#2405F2" />
                            </svg></h3>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="Strategys">
                            <div className="Strategy1">
                                <img src={One} alt="" />
                                <h1 className="Start_title">
                                    Strategy
                                </h1>
                                <p className="Start_text">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className="Strategy2">
                                <img src={Two} alt="" />
                                <h1 className="Start_title">
                                    Wireframing
                                </h1>
                                <p className="Start_text">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>

                        <div className="Strategys">

                            <div className="Strategy1 ">
                                <img src={Tree} alt="" />
                                <h1 className="Start_title">
                                    Design
                                </h1>
                                <p className="Start_text">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className="Strategy2">
                            <img src={Four} alt="" />
                                <h1 className="Start_title">
                                    Development
                                </h1>
                                <p className="Start_text">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header2;