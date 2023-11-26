import * as request from "../lib/request";

const baseURL = "http://localhost:3030/jsonstore/recipes";


export const getAll = async () => {
    const result = await request.get(baseURL);
    return Object.values(result);
};

export const create = async (recipeData) => {
    const currentDate = new Date().toLocaleDateString('de-DE');
    const dataWithDate = { ...recipeData, createdOn: currentDate };

    const result = await request.post(baseURL, dataWithDate);

    return result;
};

// export const getById = async (id) => {
//     const response = await fetch(`${baseURL}/recipes/${id}`);
//     const result = await response.json();
// };

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
