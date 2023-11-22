import "./Header.css";
import IntroSection from "./IntroSection";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <IntroSection />}

      <header className="header">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-toggleable-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#RecipeListmenu"
              aria-controls="RecipeListmenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="RecipeListmenu"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/recipes">
                    Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacts">
                    Contact Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food-category.html">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food-category.html">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
