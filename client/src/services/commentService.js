import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const getAllCommentsByRecipeId = async (recipeId) => {
    const comments = await request.get(baseUrl + `?where=recipeId%3D%22${recipeId}%22`);
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

