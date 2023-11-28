import "./DetailsRecipe.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as recipeService from "../../services/recipeService";
import * as commentService from "../../services/commentService";

import AsideBar from "../asideBar/AsideBar";
import YouMayAlsoLike from "./youMayAlsoLike/YouMayAlsoLike";

export default function DetailsRecipe() {
    const [recipe, setRecipe] = useState({});
    const [comments, setComments] = useState([]);
    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getRecipeById(recipeId).then(setRecipe);
        commentService.getAllCommentsByRecipeId(recipeId).then(setComments);
    }, [recipeId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newComment = await commentService.create(
            recipeId,
            formData.get("username"),
            formData.get("comment")
        );
        setComments((state) => [...state, newComment]);
    };

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
                                <div className="custombox clearfix">
                                    <h4 className="small-title">3 Comments</h4>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="comments-list">
                                                {comments.map(
                                                    ({
                                                        _id,
                                                        username,
                                                        text,
                                                    }) => (
                                                        <div
                                                            className="media"
                                                            key={_id}
                                                        >
                                                            <a
                                                                className="media-left"
                                                                href="#"
                                                            >
                                                                <img
                                                                    src="/upload/author.jpg"
                                                                    alt=""
                                                                    className="rounded-circle"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <h4 className="media-heading user_name">
                                                                    {username}{" "}
                                                                    <small>
                                                                        5 days
                                                                        ago
                                                                    </small>
                                                                </h4>
                                                                <p>{text}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            {comments.length === 0 && (
                                                <p>No comments yet</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <hr className="invis1" />
                                <div className="custombox clearfix">
                                    <h4 className="small-title">
                                        Leave a Reply
                                    </h4>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form
                                                className="form-wrapper"
                                                onSubmit={addCommentHandler}
                                            >
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Your name"
                                                />
                                                <textarea
                                                    name="comment"
                                                    className="form-control"
                                                    placeholder="Your comment"
                                                />
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Submit Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
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
