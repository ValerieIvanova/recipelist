import './DetailsRecipe.css';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as recipeService from "../../services/RecipeService";

import AsideBar from "../asideBar/AsideBar";
import Comments from "./comments/Comments";
import CreateComment from "./comments/CreateComment";

export default function DetailsRecipe() {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getRecipeById(recipeId)
          .then(setRecipe);
    }, [recipeId]);

    return (
        <>
            <section className="section lb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 img-container">
                            <img src={recipe.imageUrl} alt="" className="recipe-img" />
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
                                            <a href="single.html" title="">
                                                {recipe.createdOn}
                                            </a>
                                        </small>
                                        <small>
                                            <a href="single.html" title="">
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
                                    <p>
                                        {recipe.description}
                                    </p>
                                    <h3>
                                        <strong>
                                            Ingredients:
                                        </strong>
                                    </h3>
                                    <p>
                                        {recipe.ingredients}
                                    </p>
                                    <h3>
                                        <strong>
                                            How it's made:
                                        </strong>
                                    </h3>
                                    <p>
                                        {recipe.instructions}
                                    </p>

                                </div>

                                <hr className="invis1" />
                                <div className="custombox clearfix">
                                    <h4 className="small-title">
                                        You may also like
                                    </h4>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                    <a
                                                        href="single.html"
                                                        title=""
                                                    >
                                                        <img
                                                            src="upload/blog_square_10.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                        <div className="hovereffect">
                                                            <span className="" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="blog-meta">
                                                    <h4>
                                                        <a
                                                            href="single.html"
                                                            title=""
                                                        >
                                                            We are guests of ABC
                                                            Design Studio
                                                        </a>
                                                    </h4>
                                                    <small>
                                                        <a
                                                            href="blog-category-01.html"
                                                            title=""
                                                        >
                                                            Trends
                                                        </a>
                                                    </small>
                                                    <small>
                                                        <a
                                                            href="blog-category-01.html"
                                                            title=""
                                                        >
                                                            21 July, 2017
                                                        </a>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                    <a
                                                        href="single.html"
                                                        title=""
                                                    >
                                                        <img
                                                            src="upload/blog_square_11.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                        <div className="hovereffect">
                                                            <span className="" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="blog-meta">
                                                    <h4>
                                                        <a
                                                            href="single.html"
                                                            title=""
                                                        >
                                                            Nostalgia at work
                                                            with family
                                                        </a>
                                                    </h4>
                                                    <small>
                                                        <a
                                                            href="blog-category-01.html"
                                                            title=""
                                                        >
                                                            News
                                                        </a>
                                                    </small>
                                                    <small>
                                                        <a
                                                            href="blog-category-01.html"
                                                            title=""
                                                        >
                                                            20 July, 2017
                                                        </a>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
