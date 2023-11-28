import Path from "../Path";
import { Link } from "react-router-dom";

export default function IntroSection() {
  return (
    <section id="cta" className="jumbotron text-center">
      <div className="container">
        <a href="#">
          <img
            src="/images/version/food-logo.png"
            alt=""
            className="img-fluid"
          />
        </a>
        <p>
          Welcome to my personal Blog - a culinary journey through my passion for
          cooking and sharing delicious recipes.
        </p>
        <Link to={Path.Recipes} className="btn btn-primary">
          View Recipes
        </Link>
      </div>
    </section>
  );
}
