import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const isResultPage = location.pathname === "/result";

    return (
        <header className="navbar">
           <h1 className="logo">ResuMy</h1>

           <nav className="nav-menu">
                {isResultPage ? (
                    <>
                        <p>My Result</p>
                        <Link to="/">Back to Home</Link>
                    </>
                ) : (
                    <>
                        <a href="#about">About</a>
                        <a href="#featured">Featured</a>
                        <a href="#upload-cv">Upload CV</a>
                        <a href="#tech">Tech</a>
                        
                    </>
                )}
           </nav>
        </header>

    )
}

export default Navbar;
