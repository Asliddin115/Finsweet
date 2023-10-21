import Build from "./Img/Building.png"
import Bgraund from "./Img/Bacgraund.png"

function Building() {
    return (
        <div className="Building">
            <div className="container">
                <div className="Building_content">
                    <div className="Building_imgs">
                        <img src={Build} alt="" />
                        {/* <div className="Building_img">
                            <img src={Bgraund} alt="" />
                        </div> */}

                        <div className="building_texts">
                            <h1 className="build_title">Building stellar websites for early startups</h1>
                            <p className="build_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </div>
                    <div className="building_contact">
                        <h1 className="build_contact_title">Send inquiry</h1>
                        <p className="build_contact_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <input className="build_contact_name" type="text" placeholder="Your Name" />
                        <input className="build_mail" type="email" placeholder="Email" />
                        <input className="build_url" type="url" placeholder="Paste your Figma design URL" />
                        <button className="build_btn">Send an Inquiry</button>
                        <h1 className="build_get_touch"> <a href="#">Get in touch with us<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC" />
                        </svg></a></h1>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Building;