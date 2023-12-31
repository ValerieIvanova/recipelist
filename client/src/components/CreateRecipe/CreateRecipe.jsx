import "./createRecipe.css";

import { useNavigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import Path from "../paths";
import { validateRecipeForm } from "../../utils/formValidation";

export default function CreateRecipe() {
    const navigate = useNavigate();
    const { username } = useContext(AuthContext);
    const [formErrors, setFormErrors] = useState({});

    const addRecipeSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ingredients = formData.get("ingredients").split(",");
        const instructions = formData.get("instructions").split(",");
        if (!formData.get("imageUrl")) {
            formData.set(
                "imageUrl",
                "../../../public/images/no-recipe-image.png"
            );
        }
        const recipeData = {
            ...Object.fromEntries(formData),
            ingredients,
            instructions,
        };

        const errors = validateRecipeForm(recipeData);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return
        }

        try {
            await recipeService.create(recipeData, username);
            navigate(Path.MyRecipes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="add-recipe-container">
                <form id="add-recipe" onSubmit={addRecipeSubmitHandler}>
                    <h1>Add Recipe</h1>
                    <label htmlFor="title">Title</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Recipe Title"
                    />
                    {formErrors.title && (
                        <p className="error">{formErrors.title}</p>
                    )}
                    <br />

                    <label htmlFor="category">Category</label>
                    <br />
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter recipe category (e.g., Main Dish, Salad, ...)"
                    />
                    {formErrors.category && (
                        <p className="error">{formErrors.category}</p>
                    )}
                    <br />

                    <label htmlFor="description">Description</label>
                    <br />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter a brief description of the recipe (e.g., A flavorful dish with a blend of spices, ...)"
                    />
                    {formErrors.description && (
                        <p className="error">{formErrors.description}</p>
                    )}
                    <br />

                    <label htmlFor="imageUrl">Image</label>
                    <br />
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Recipe Image"
                    />
                    <br />

                    <label htmlFor="ingredients">Ingredients</label>
                    <br />
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        placeholder="Enter ingredients separated by commas (e.g., 1 cup flour, 2 eggs, ...)"
                    />
                    {formErrors.ingredients && (
                        <p className="error">{formErrors.ingredients}</p>
                    )}
                    <br />

                    <label htmlFor="instructions">Instructions</label>
                    <br />
                    <textarea
                        id="instructions"
                        name="instructions"
                        placeholder="Enter instructions separated by commas (e.g., Mix flour and eggs, Preheat oven to 350°F, ...)"
                    />
                    {formErrors.instructions && (
                        <p className="error">{formErrors.instructions}</p>
                    )}
                    <br />

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
