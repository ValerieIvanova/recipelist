import "./Header.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import IntroSection from "./IntroSection";
import Path from "../Path";

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
                                    <Link className="nav-link" to={Path.Home}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={Path.Recipes}
                                    >
                                        Recipes
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={Path.Contacts}
                                    >
                                        Contact Me
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={Path.CreateRecipe}
                                    >
                                        Add Recipe
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={Path.GetStarted}>
                                        GetStarted
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
