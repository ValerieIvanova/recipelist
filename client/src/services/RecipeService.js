const baseURL = "http://localhost:3030/jsonstore";

export const create = async (recipeData) => {
    const response = await fetch(`${baseURL}/recipes`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
    });
    const result = await response.json();

    return result;
};

export const getAll = async () => {
    const response = await fetch(`${baseURL}/recipes`);
    const result = await response.json();
};

export const getById = async (id) => {
    const response = await fetch(`${baseURL}/recipes/${id}`);
    const result = await response.json();
};

export const update = async (id, recipeData) => {
    const response = await fetch(`${baseURL}/recipes/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
    });
    const result = await response.json();
};

export const deleteById = async (id) => {
    const response = await fetch(`${baseURL}/recipes/${id}`, {
        method: "delete",
    });
    const result = await response.json();
};
