const baseURL = "http://localhost:3030/jsonstore";

export const add = async (recipeData) => {
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
