export default function IngredientsList({ ingredients }) {
  return (
    <div className="ing-list">
      {ingredients.map((ing, index) => (
        <span key={index} className="ing-pill">
          {ing}
        </span>
      ))}
    </div>
  );
}
