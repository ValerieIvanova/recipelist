export const validateRecipeForm = (recipeData) => {
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

export const validateLoginForm = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Email is required";
    }

    if (!values.password) {
        errors.password = "Password is required";
    }

    return errors;
}

export const validateRegisterForm = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Email is required";
    }
    if (!values.username) {
        errors.username = "Username is required";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }
    if (!values.repeatPassword) {
        errors.repeatPassword = "Repeat password is required";
    }

    return errors;
}

export const validateAddCommentForm = (values) => {
    let errors = {};

    if (!values.comment.trim()) {
        errors.comment = "Can't be empty";
    }

    return errors;
}