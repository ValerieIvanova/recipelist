import Path from '../paths';

import RecipeItemGrid from "./RecipeItemGrid";
import { useState, useEffect } from "react";

import * as recipeService from "../../services/recipeService";
import { Link } from 'react-router-dom';

export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getByPopularity().then((result) => setRecipes(result));
    }, []);

    return (
        <section className="section lb text-muted">
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "40px",
                    fontWeight: "lighter",
                }}
            >
                <i className="fa fa-star " /> Most popular recipes
            </h2>
            <div className="container">
                <div className="row grid-style">
                    {recipes.slice(0, 8).map((recipe) => (
                        <RecipeItemGrid key={recipe._id} {...recipe} />
                    ))}
                </div>
                <hr className="invis" />
            </div>
            <div className='text-center'>
            <Link to={Path.Recipes} className="see-all-btn btn btn-primary btn-lg ">
                See all
            </Link>
            </div>
        </section>
    );
}
