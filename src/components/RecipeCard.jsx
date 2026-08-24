export default function RecipeCard({ recipe, onSelect }) {
  return (
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
      <span className="rc-emoji">{recipe.emoji}</span>
      <h3 className="rc-name">{recipe.name}</h3>
      <p className="rc-meta">
        {recipe.time} · {recipe.servings} servings
      </p>
      <span className="rc-tag">{recipe.category}</span>
    </div>
  );
}
