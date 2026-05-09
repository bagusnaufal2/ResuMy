import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

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
            <a href="#home">Home</a>
            <a href="#dashboard">Dashboard</a>
            <ThemeToggle></ThemeToggle>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
