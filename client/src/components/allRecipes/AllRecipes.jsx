import AsideBar from "../asideBar/AsideBar";
import RecipeListItem from "./recipeListItem/RecipeListItem";

import { useEffect, useState } from "react";

import * as recipeService from "../../services/recipeService";

export default function AllRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getByPopularity()
            .then((result) => setRecipes(result))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <section className="section lb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="blog-list clearfix">
                                    {recipes.map((recipe) => (
                                        <RecipeListItem
                                            key={recipe._id}
                                            {...recipe}
                                        />
                                    ))}
                                </div>
                            </div>

                            <hr className="invis" />

                            <div className="row">
                                <div className="col-md-12">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <AsideBar />
                    </div>
                </div>
            </section>
        </>
    );
}
