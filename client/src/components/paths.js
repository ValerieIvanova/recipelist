const Path = {
    Home: '/',
    Recipes: '/recipes',
    CreateRecipe: '/recipes/create',
    DetailsRecipe: (recipeId) => `/recipes/${recipeId}`,
    EditRecipe: (recipeId) => `/recipes/${recipeId}/edit`,
    Contacts: '/contacts',
    GetStarted: '/get-started',
    MyRecipes: '/my-recipes',
    Logout: '/logout',
    Search: (searchQuery) => `/recipes/search/${searchQuery}`,
}

export default Path