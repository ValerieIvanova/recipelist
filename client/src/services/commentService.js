import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const getAllCommentsByRecipeId = async (recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId='${recipeId}'`,
    })
    const comments = await request.get(`${baseUrl}?${query}`);
    return Object.values(comments);
}

export const create = async (recipeId, username, text) => {
    const newComment = await request.post(baseUrl, {
        recipeId,
        username,
        text,
    });
    return newComment;
};

