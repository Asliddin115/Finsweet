
import Woman from "./Img/woman.png"


function What() {
    return (
        <div className="What">
            <div className="container">
                <div className="What_content">
                    <div className="What_left">
                        <h1 className="What_title1">What our clients say about us</h1>
                        <p className="What_text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className="what_right">
                        <h1 className="What_title">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h1>
                        <div className="jenny">
                            <div className="accaunt">
                                <div className="ac_img">
                                    <img src={Woman} alt="" />
                                </div>
                                <div className="ac_texts">
                                    <h1 className="jenny_wilson">Jenny Wilson</h1>
                                    <p className="jeny-wil">Vice President</p>
                                </div>
                            </div>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="108" height="48" viewBox="0 0 108 48" fill="none">
                                <ellipse cx="83.0997" cy="24" rx="24.0997" ry="24" fill="#5239FA" />
                                <path d="M77.4141 35L76 31.7805L85.0305 24.0894L76 16.2195L77.4141 13L89 23.374V25.1626L77.4141 35Z" fill="white" />
                                <ellipse cx="24.0995" cy="24" rx="24.0997" ry="24" transform="rotate(-180 24.0995 24)" fill="white" />
                                <path opacity="0.6" d="M28.5859 13L30 16.2195L20.9695 23.9106L30 31.7805L28.5859 35L17 24.626L17 22.8374L28.5859 13Z" fill="#282938" />
                            </svg></a>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default What;