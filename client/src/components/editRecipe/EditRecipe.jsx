import "./editRecipe.css";

import { useNavigate, useParams } from "react-router-dom";

import * as recipeService from "../../services/recipeService";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";
import Path from "../paths";
import { validateRecipeForm } from "../../utils/recipeFormValidation";

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
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        recipeService.getById(recipeId).then((result) => {
            setRecipe(result);
        });
    }, [recipeId]);

    const editRecipeSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ingredients = formData.get("ingredients").split(",");
        const instructions = formData.get("instructions").split(",");

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
            const updatedValues = {
                ...recipeData,
                _owner: username,
                popularity: recipe.popularity,
            };

            await recipeService.edit(recipeId, updatedValues);
            navigate(-1);
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

    const onImageError = (e) => {
        console.log("Image failed to load or doesn't exist:", e.target.src);
        e.currentTarget.src = "../../../public/images/no-recipe-image.png";
    }

    return (
        <>
            <div className="edit-recipe-container">
                <form id="edit-recipe" onSubmit={editRecipeSubmitHandler}>
                    <h1>Edit Recipe</h1>
                    {(recipe.imageUrl && (
                        <img src={recipe.imageUrl} alt={recipe.title} onError={onImageError}/>
                    )) || <img src="../../../public/images/no-recipe-image.png" alt={recipe.title} />}
                    <br />
                    <label htmlFor="title">Title</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Recipe Title"
                        value={recipe.title}
                        onChange={onChange}
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
                        value={recipe.category}
                        onChange={onChange}
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
                        value={recipe.description}
                        onChange={onChange}
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
                        value={recipe.imageUrl}
                        onChange={onChange}
                    />
                    <br />

                    <label htmlFor="ingredients">Ingredients</label>
                    <br />
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        placeholder="Enter ingredients separated by commas (e.g., 1 cup flour, 2 eggs, ...)"
                        value={recipe.ingredients}
                        onChange={onChange}
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
                        value={recipe.instructions}
                        onChange={onChange}
                    />
                    {formErrors.instructions && (
                        <p className="error">{formErrors.instructions}</p>
                    )}
                    <br />

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
