import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import '../css/Navbar.css'

function NavBar(){
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50); // Cambia si scrollY > 50px
        };
    
        window.addEventListener("scroll", handleScroll);
    // Limpieza del event listener
    return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return ( <div className="header">
        <nav className="nav">
            <ul className={`nav-cont ${isScrolled ? "nav-active" : ""}`}>
            <li>
            <Link
              to="/"
              className={`nav__link ${isActive("/") ? "active" : ""}`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav__link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              to="/experience"
              className={`nav__link ${isActive("/experience") ? "active" : ""}`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={`nav__link ${isActive("/favorites") ? "active" : ""}`}
            >
              Contact
            </Link>
          </li> */}
            </ul>
        </nav>
    </div>)
}

export default NavBar