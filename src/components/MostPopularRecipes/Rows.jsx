import RecipeItem from "./RecipeItem";

export default function Rows() {
  return (
    <>
      <div className="row grid-style">
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
      </div>

      <hr className="invis" />
    </>
  );
}
