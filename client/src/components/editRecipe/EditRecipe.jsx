import "./editRecipe.css";

import { useNavigate, useParams } from "react-router-dom";

import * as recipeService from "../../services/recipeService";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";
import Path from "../paths";

export default function EditRecipe() {
    const navigate = useNavigate();
    const { username } = useContext(AuthContext);
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({
        title: "",
        category: "",
        description: "",
        imageUrl: "",
        ingredients: [],
        instructions: [],
    });
    useEffect(() => {
        recipeService.getById(recipeId).then((result) => {
            setRecipe(result);
        });
    }, [recipeId]);

    const editRecipeSubmitHandler = async (e) => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            const updatedValues = {
                ...values,
                _owner: username,
                popularity: recipe.popularity,
            };

            await recipeService.edit(recipeId, updatedValues);
            navigate(Path.MyRecipes);
        } catch (error) {
            console.log(error);
        }
    };

    const onChange = (e) => {
        setRecipe((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <div className="edit-recipe-container">
                <form id="edit-recipe" onSubmit={editRecipeSubmitHandler}>
                        <h1>Edit Recipe</h1>
                <img src={recipe.imageUrl} alt={recipe.title} /><br />
                        <label htmlFor="title">Title</label><br />
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Recipe Title"
                            value={recipe.title}
                            onChange={onChange}
                        /><br />

                        <label htmlFor="category">Category</label><br />
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Category"
                            value={recipe.category}
                            onChange={onChange}
                        /><br />

                        <label htmlFor="description">Description</label><br />
                        <textarea
                            id="description"
                            name="description"
                            value={recipe.description}
                            onChange={onChange}
                        /><br />

                        <label htmlFor="imageUrl">Image</label><br />
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Recipe Image"
                            value={recipe.imageUrl}
                            onChange={onChange}
                        /><br />

                        <label htmlFor="ingredients">Ingredients</label><br />
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            value={recipe.ingredients}
                            onChange={onChange}
                        /><br />

                        <label htmlFor="instructions">Instructions</label><br />
                        <textarea
                            id="instructions"
                            name="instructions"
                            value={recipe.instructions}
                            onChange={onChange}
                        /><br />

                        <input
                            className="edit-btn btn btn-primary submit-btn"
                            type="submit"
                            value="Edit Recipe"
                        />
                </form>
            </div>
        </>
    );
}
