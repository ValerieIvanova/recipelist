import "./AddRecipe.css";

export default function AddRecipe() {
  return (
    <>
      <form id="add-recipe">
        <div className="add-recipe-container">
          <h1>Add Recipe</h1>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Recipe Title"
          />

          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
          />

          <label htmlFor="recipe-img">Image</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Recipe Image"
          />

          <label htmlFor="ingredients">Ingredients</label>
          <textarea id="ingredients" name="ingredients" />

          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" name="instructions" />
        </div>
      </form>
    </>
  );
}
