import Path from "../paths";
import { Link } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function IntroSection() {
    const { isAuthenticated, username } = useContext(AuthContext);
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
                    Welcome to our Community Kitchen – an interactive space for
                    culinary enthusiasts to share, discover, and savor
                    delightful recipes.
                </p>

                {isAuthenticated && (
                    <Link to="#" className="btn btn-primary">
                        Greetings, Master Chef {username}!
                    </Link>
                )}
                {!isAuthenticated && (
                    <Link to={Path.GetStarted} className="btn btn-primary">
                        Get Started
                    </Link>
                )}
            </div>
        </section>
    );
}
