export const validateRecipeForms = (recipeData) => {
    const errors = {};

    if (!recipeData.title) {
        errors.title = "Title is required";
    }
    if (!recipeData.category) {
        errors.category = "Category is required";
    }
    if (!recipeData.description) {
        errors.description = "Description is required";
    }

    if (recipeData.ingredients.length === 0 || !recipeData.ingredients[0].trim()) {
        errors.ingredients = "Ingredients are required";
    }

    if (recipeData.instructions.length === 0 || !recipeData.instructions[0].trim()) {
        errors.instructions = "instructions are required";
    }

    return errors;
};
