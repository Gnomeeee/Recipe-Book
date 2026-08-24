import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, onSelect }) {
  return (
    <div>
      <h1 className="list-title">Recipe Book</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
