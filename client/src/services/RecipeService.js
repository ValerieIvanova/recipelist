import * as request from "../lib/request";

const baseURL = "http://localhost:3030/data/recipes";


export const getAll = async () => {
    const result = await request.get(baseURL);
    return result
};

export const getByOwnerId = async (ownerId) => {
    const result = await request.get(`${baseURL}?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);
    return result
}

export const create = async (recipeData, username) => {
    const dataWithOwner = { ...recipeData, owner: username };

    const result = await request.post(baseURL, dataWithOwner);

    return result;
};

export const getRecipeById = async (id) => {
    const result = await request.get(`${baseURL}/${id}`);
    return result;
};

// export const update = async (id, recipeData) => {
//     const response = await fetch(`${baseURL}/recipes/${id}`, {
//         method: "put",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(recipeData),
//     });
//     const result = await response.json();
// };

// export const deleteById = async (id) => {
//     const response = await fetch(`${baseURL}/recipes/${id}`, {
//         method: "delete",
//     });
//     const result = await response.json();
// };
