import { Route, Routes } from "react-router-dom";
import "./Header.css";
import IntroSection from "./IntroSection";

export default function Header() {
  return (
    <>
      <IntroSection />

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
                  <a className="nav-link" href="food-index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food-category.html">
                    Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food-category.html">
                    <i className="fa fa-play-circle-o"></i> Video Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food-category.html">
                    Restaurants
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food-category.html">
                    Kitchenware
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food-contact.html">
                    Contact Me
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
