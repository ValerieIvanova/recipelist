import "../../allRecipes/allRecipes.css";
import AsideBar from "../AsideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RecipeListItem from "../../recipeListItem/RecipeListItem";
import * as recipeService from "../../../services/recipeService";

export default function FoundRecipes() {
    const { searchQuery } = useParams();
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        searchRecipes();
    }, [searchQuery]);

    const searchRecipes = async () => {
        try {
            const result = await recipeService.searchRecipes(searchQuery);
            setRecipes(result);
        } catch (error) {
            console.error("Error searching recipes:", error);
        }
    };

    return (
        <>
            <section className="section lb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            {recipes.length !== 0 && (
                                <>
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
                                </>
                            )}
                            {recipes.length === 0 && (
                                        <h2>No recipes found.</h2>
                                    )}
                        </div>
                        <AsideBar />
                    </div>
                </div>
            </section>
        </>
    );
}
