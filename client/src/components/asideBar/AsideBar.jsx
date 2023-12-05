import { useState, useEffect } from "react";

import * as recipeService from "../../services/recipeService";

import RecentPostsItem from "./recentPostsItem.jsx/RecentPostsItem";

export default function AsideBar() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll().then((result) => setRecipes(result));
    }, []);

    return (
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
                <div className="widget">
                    <h2 className="widget-title">Search</h2>
                    <form className="search-form">
                        <input
                            id="search"
                            type="text"
                            className="form-control"
                            placeholder="Search on the site"
                        />
                    </form>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Recent Posts</h2>
                    <div className="blog-list-widget">
                        <div className="list-group">

                            {recipes.map((recipe) => (
                                <RecentPostsItem
                                    key={recipe._id}
                                    {...recipe}
                                />
                            ))}

                        </div>
                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Popular Categories</h2>
                    <div className="link-widget">
                        <ul>
                            <li>
                                <a href="#">
                                    Fahsion <span>(21)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Lifestyle <span>(15)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Art & Design <span>(31)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Health Beauty <span>(22)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Clothing <span>(66)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Entertaintment <span>(11)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Food & Drink <span>(87)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
