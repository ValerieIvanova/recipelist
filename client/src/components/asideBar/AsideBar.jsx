import "./asideBar.css";

import { useState, useEffect } from "react";

import * as recipeService from "../../services/recipeService";

import RecentPostsItem from "./recentPostsItem.jsx/RecentPostsItem";

export default function AsideBar() {
    const [recipes, setRecipes] = useState([]);
    const [categoriesLength, setCategoriesLength] = useState([]);

    useEffect(() => {
        recipeService.getLatestFive().then((result) => setRecipes(result));
    }, []);

    useEffect(() => {
        recipeService
            .getByPopularity()
            .then((result) => {
                const categories = result.map((recipe) => recipe.category);
                const uniqueCategories = [...new Set(categories)];
                const categoriesLength = uniqueCategories.map((category) => {
                    return {
                        categoryName: category,
                        count: result.filter((recipe) => recipe.category === category).length,
                    };
                });

                setCategoriesLength(categoriesLength);
            })
            .catch((error) => console.log(error));
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
                                <RecentPostsItem key={recipe._id} {...recipe} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Popular Categories</h2>
                    <div className="link-widget">
                        <ul>
                            {categoriesLength.map(({ categoryName, count }) => (
                                <li key={categoryName}>
                                    <a href="">{categoryName} 
                                    <span>{count}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
