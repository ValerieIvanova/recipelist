import "./DetailsRecipe.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as recipeService from "../../services/RecipeService";

import AsideBar from "../asideBar/AsideBar";
import Comments from "./comments/Comments";
import CreateComment from "./comments/CreateComment";
import YouMayAlsoLike from "./youMayAlsoLike/YouMayAlsoLike";

export default function DetailsRecipe() {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getRecipeById(recipeId).then(setRecipe);
    }, [recipeId]);

    return (
        <>
            <section className="section lb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 img-container">
                            <img
                                src={recipe.imageUrl}
                                alt=""
                                className="recipe-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="blog-title-area">
                                    <h3>{recipe.title}</h3>
                                    <div className="blog-meta big-meta">
                                        <small>
                                            <a href="#" title="">
                                                {recipe.createdOn}
                                            </a>
                                        </small>
                                        <small>
                                            <a href="#" title="">
                                                {recipe.category}
                                            </a>
                                        </small>
                                        <small>
                                            <a href="#" title="">
                                                <i className="fa fa-eye" /> 2344
                                            </a>
                                        </small>
                                    </div>
                                    <div className="post-sharing">
                                        <ul className="list-inline">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="fb-button btn btn-primary"
                                                >
                                                    <i className="fa fa-facebook" />{" "}
                                                    <span className="down-mobile">
                                                        Share on Facebook
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="tw-button btn btn-primary"
                                                >
                                                    <i className="fa fa-twitter" />{" "}
                                                    <span className="down-mobile">
                                                        Tweet on Twitter
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="gp-button btn btn-primary"
                                                >
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <p>{recipe.description}</p>
                                    <h3>
                                        <strong>Ingredients:</strong>
                                    </h3>
                                    <p>{recipe.ingredients}</p>
                                    <h3>
                                        <strong>How it's made:</strong>
                                    </h3>
                                    <p>{recipe.instructions}</p>
                                </div>

                                <hr className="invis1" />
                                <YouMayAlsoLike />
                                <hr className="invis1" />
                                <Comments />
                                <hr className="invis1" />
                                <CreateComment />
                            </div>
                        </div>
                        <AsideBar />
                    </div>
                </div>
            </section>
        </>
    );
}
