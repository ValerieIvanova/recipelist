import { expect, test } from "vitest";
import { validateRecipeForm, validateLoginForm, validateRegisterForm, validateAddCommentForm } from "./formValidation";

test("validateRecipeForm", () => {
    const recipeData = {
        title: "",
        category: "test",
        description: "test",
        ingredients: [""],
        instructions: ["test"],
    };

    const errors = validateRecipeForm(recipeData);

    expect(errors).toEqual({
        title: "Title is required",
        ingredients: "Ingredients are required",
    });
});

test("validateLoginForm", () => {
    const values = {
        email: "",
        password: "",
    };

    const errors = validateLoginForm(values);

    expect(errors).toEqual({
        email: "Email is required",
        password: "Password is required",
    });
});

test("validateRegisterForm", () => {
    const values = {
        email: "",
        username: "",
        password: "",
        repeatPassword: "",
    };

    const errors = validateRegisterForm(values);

    expect(errors).toEqual({
        email: "Email is required",
        username: "Username is required",
        password: "Password is required",
        repeatPassword: "Repeat password is required",
    })
})

test("validateAddCommentForm", () => {
    const values = {
        comment: "",
    }

    const errors = validateAddCommentForm(values);

    expect(errors).toEqual({
        comment: "Can't be empty",
    })
})