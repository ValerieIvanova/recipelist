import * as request from "../lib/request";

// const baseUrl = "http://localhost:3030/data/comments";

const baseUrl = `${import.meta.env.VITE_API_URL}/data/comments`;

export const getAll = async (recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
        load: `owner=_ownerId:users`,
    })

    const comments = await request.get(`${baseUrl}?${query}`);

    return comments
}

export const create = async (recipeId, content) => {
    const newComment = await request.post(baseUrl, {
        recipeId,
        content,
    });
    return newComment;
};

