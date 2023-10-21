function Navbar() {
    return (

        <nav className="Navbar">

            <a href="#" className="Logo">Finsweet</a>
            <nav className="navbar2">
                <ul className="Navbar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>

                </ul>
                <button className="Navbar-btn">Contact us </button>
            </nav>

        </nav>
    )
}
export default Navbar;