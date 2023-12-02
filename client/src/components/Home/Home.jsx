import RecipeItemGrid from "./RecipeItemGrid";
import { useState, useEffect } from "react";

import * as recipeService from "../../services/recipeService";

export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getByPopularity().then((result) => setRecipes(result));
    }, []);

    return (
        <section className="section lb text-muted">
            <h2 style={{ textAlign: "center", marginBottom: "40px", fontWeight: "lighter" }}>
                <i className="fa fa-star " /> Most popular
                recipes
            </h2>
            <div className="container">
                <div className="row grid-style">
                    {recipes.map((recipe) => (
                        <RecipeItemGrid key={recipe._id} {...recipe} />
                    ))}
                </div>

                <hr className="invis"></hr>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}
