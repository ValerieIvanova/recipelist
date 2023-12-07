import "./createRecipe.css";

import { useNavigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function CreateRecipe() {
    const navigate = useNavigate();
    const { username } = useContext(AuthContext);
    const addRecipeSubmitHandler = async (e) => {
        e.preventDefault();
        const recipeData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await recipeService.create(recipeData, username);
            navigate("/recipes");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="add-recipe-container">
                <form id="add-recipe" onSubmit={addRecipeSubmitHandler}>
                    <h1>Add Recipe</h1>
                    <label htmlFor="title">Title</label><br/>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Recipe Title"
                    /><br/>

                    <label htmlFor="category">Category</label><br/>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Category"
                    /><br/>

                    <label htmlFor="description">Description</label><br/>
                    <textarea id="description" name="description" /><br/>

                    <label htmlFor="imageUrl">Image</label><br/>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Recipe Image"
                    /><br/>

                    <label htmlFor="ingredients">Ingredients</label><br/>
                    <textarea id="ingredients" name="ingredients" /><br/>

                    <label htmlFor="instructions">Instructions</label><br/>
                    <textarea id="instructions" name="instructions" /><br/>

                    <input
                        className="add-btn btn btn-primary submit-btn"
                        type="submit"
                        value="Add Recipe"
                    />
                </form>
            </div>
        </>
    );
}
