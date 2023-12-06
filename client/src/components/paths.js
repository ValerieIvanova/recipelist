const Path = {
    Home: '/',
    Recipes: '/recipes',
    CreateRecipe: '/recipes/create',
    DetailsRecipe: (recipeId) => `/recipes/${recipeId}`,
    EditRecipe: (recipeId) => `/recipes/${recipeId}/edit`,
    DeleteRecipe: (recipeId) => `/recipes/${recipeId}/delete`,
    Contacts: '/contacts',
    GetStarted: '/get-started',
    MyRecipes: '/my-recipes',
    Logout: '/logout',
}

export default Path