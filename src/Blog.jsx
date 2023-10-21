import Man from "./Img/hear_man.png"
import Woman from "./Img/work_woman.png"
import Pc from "./Img/pc.png"

function Blog() {
    return (
        <div className="Blog">
            <div className="container">
                <div className="Blog_content">
                    <h1 className="blog_title">Our blog</h1>
                    <div className="blogs">
                        <div className="blog">
                            <img className="blog_man" src={Man} alt="" />
                            <p className="blog_time">19 Jan 2022</p>
                            <h1 className="blog_title2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h1>
                            <p className="blog_text">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <p className="blog_more">Read More<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
                            </svg></p>
                        </div>
                        <div className="blog">
                            <img className="blog_man" src={Woman} alt="" />
                            <p className="blog_time">19 Jan 2022</p>
                            <h1 className="blog_title2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h1>
                            <p className="blog_text">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <p className="blog_more">Read More<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
                            </svg></p>
                        </div>
                        <div className="blog">
                            <img className="blog_man" src={Pc} alt="" />
                            <p className="blog_time">19 Jan 2022</p>
                            <h1 className="blog_title2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h1>
                            <p className="blog_text">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <p className="blog_more">Read More<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
                            </svg></p>
                        </div>


                    </div>

                </div>

            </div>

        </div>

    )
}
export default Blog;