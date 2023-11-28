import RandomRecipe from "./RandomRecipe";

import * as recipeService from "../../../services/recipeService";

import { useEffect, useState } from "react";

export default function YouMayAlsoLike() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        recipeService.getAll().then((result) => {
            const randomRecipes = selectRandomRecipes(result, 2)
            setRecipes(randomRecipes);
        });

    }, [])

    const selectRandomRecipes = (arr, count) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    return (
        <>
            <div className="custombox clearfix">
                <h4 className="small-title">You may also like</h4>
                <div className="row">
                    {recipes.map((recipe) => (
                        <RandomRecipe key={recipe._id} {...recipe} />
                    ))}
                </div>
            </div>
        </>
    );
}
