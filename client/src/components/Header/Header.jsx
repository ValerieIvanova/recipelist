import "./header.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import Path from "../paths";
import AuthContext from "../../contexts/authContext";

import IntroSection from "./IntroSection";

export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext);

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
                                        Contacts
                                    </Link>
                                </li>
                                {isAuthenticated && (
                                    <>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                to={Path.CreateRecipe}
                                            >
                                                Add Recipe
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                to={Path.MyRecipes}
                                            >
                                                My Recipes
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">
                                                Profile
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                to="/logout"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </>
                                )}
                                {!isAuthenticated &&
                                    location.pathname !== "/" && (
                                        <Link
                                            to={Path.GetStarted}
                                            className="btn btn-primary"
                                        >
                                            Get Started
                                        </Link>
                                    )}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
