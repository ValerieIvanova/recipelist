import "./CreateRecipe.css";

import { useNavigate } from "react-router-dom";

import * as recipeService from "../../services/RecipeService";

export default function CreateRecipe() {
    const navigate = useNavigate();
    const addRecipeSubmitHandler = async (e) => {
        e.preventDefault();
        const recipeData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await recipeService.create(recipeData);
            navigate("/recipes");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form id="add-recipe" onSubmit={addRecipeSubmitHandler}>
                <div className="add-recipe-container">
                    <h1>Add Recipe</h1>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Recipe Title"
                    />

                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Category"
                    />

                    <label htmlFor="recipe-img">Image</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Recipe Image"
                    />

                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea id="ingredients" name="ingredients" />

                    <label htmlFor="instructions">Instructions</label>
                    <textarea id="instructions" name="instructions" />

                    <input
                        className="submit-btn"
                        type="submit"
                        value="Add Recipe"
                    />
                </div>
            </form>
        </>
    );
}
