import * as request from "../lib/request";

// const baseURL = "http://localhost:3030/data/recipes";

const baseURL = `${import.meta.env.VITE_API_URL}/data/recipes`;

export const getAll = async () => {
    const result = await request.get(`${baseURL}?sortBy=_createdOn%20desc`);

    return result
};


export const create = async (recipeData, username) => {
    const dataWithOwner = { ...recipeData, _owner: username, popularity: 0 };
    
    const result = await request.post(baseURL, dataWithOwner);
    
    return result;
};

export const getByOwnerId = async (ownerId) => {
    const result = await request.get(`${baseURL}?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);
    return result
}

export const getById = async (recipeId) => {
    const result = await request.get(`${baseURL}/${recipeId}`);
    return result;
};

export const getByPopularity = async () => {
    const result = await request.get(`${baseURL}?sortBy=popularity%20desc`);
    return result
}

export const getLatestFive = async () => {
    const result = await request.get(`${baseURL}?offset=0&pageSize=5&sortBy=_createdOn%20desc`);
    return result
}

export const remove = async (recipeId) => {
    const result = await request.remove(`${baseURL}/${recipeId}`);
    return result
}

export const edit = async (recipeId, values) => {
    const result = await request.put(`${baseURL}/${recipeId}`, values);
    return result
}

export const searchRecipes = async (searchQuery) => {
    const encodedSearchQuery = encodeURIComponent(`"${searchQuery}"`);
    const result = await request.get(
        `${baseURL}?where=title%20LIKE%20${encodedSearchQuery}`
    );
    return result;
};
