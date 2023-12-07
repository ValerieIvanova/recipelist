import "./DetailsRecipe.css";

import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";
import * as recipeService from "../../services/recipeService";

import AsideBar from "../asideBar/AsideBar";
import YouMayAlsoLike from "./youMayAlsoLike/YouMayAlsoLike";
import formatDate from "../../utils/formattedDate";
import Path from "../paths";
import Comments from "./comments/Comments";

export default function DetailsRecipe() {
    const { userId } = useContext(AuthContext);
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});
    const createdOn = formatDate(recipe._createdOn);
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getById(recipeId).then(setRecipe);
    }, [recipeId]);

    const deleteButtonHandler = async () => {
        const isConfirmed = confirm(
            `Are you sure you want to delete ${recipe.title}?`
        );
        if (isConfirmed) {
            await recipeService.remove(recipeId);
            navigate(Path.MyRecipes);
        }
    };

    const isOwner = userId === recipe._ownerId;

    return (
        <>
            <section className="section lb">
                <div className="container">
                    <img src={recipe.imageUrl} alt="" className="recipe-img" />
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
                                                {createdOn}
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
                                    <div className="ingredients-list">
                                        {recipe.ingredients &&
                                            recipe.ingredients.map(
                                                (ingredient, index) => (
                                                    <p
                                                        className="ingredient"
                                                        key={index}
                                                    >
                                                        {ingredient}
                                                    </p>
                                                )
                                            )}
                                    </div>
                                    <h3>
                                        <strong>How it's made:</strong>
                                    </h3>
                                    <div className="ingredients-list">
                                        {recipe.instructions &&
                                            recipe.instructions.map(
                                                (step, index) => (
                                                    <p
                                                        className="step"
                                                        key={index}
                                                    >
                                                        <strong>
                                                            {index + 1}.
                                                        </strong>
                                                        {step}
                                                    </p>
                                                )
                                            )}
                                    </div>
                                </div>
                                <hr className="invis" />

                                {isOwner && (
                                    <div className="buttons">
                                        <Link
                                            to={Path.EditRecipe(recipeId)}
                                            className="edit-btn btn btn-primary"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-primary"
                                            onClick={deleteButtonHandler}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                                <hr className="invis1" />
                                <YouMayAlsoLike />
                                <hr className="invis1" />

                                <Comments />
                            </div>
                        </div>
                        <AsideBar />
                    </div>
                </div>
            </section>
        </>
    );
}
