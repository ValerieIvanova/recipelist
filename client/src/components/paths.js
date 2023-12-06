const Path = {
    Home: '/',
    Recipes: '/recipes',
    CreateRecipe: '/recipes/create',
    DetailsRecipe: (recipeId) => `/recipes/${recipeId}`,
    EditRecipe: '/recipes/:recipeId/edit',
    DeleteRecipe: '/recipes/:recipeId/delete',
    Contacts: '/contacts',
    GetStarted: '/get-started',
    MyRecipes: '/my-recipes',
    Logout: '/logout',
}

export default Path