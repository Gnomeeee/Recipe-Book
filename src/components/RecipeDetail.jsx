import IngredientsList from "./IngredientList";
import Section from "./Section";
import StepList from "./StepList";

export default function RecipeDetail({ recipe, onBack }) {
  return (
    <div>
      <button className="back-btn" onClick={onBack}>
        ← Back to recipes
      </button>

      <div className="detail-header">
        <span className="detail-imoji">{recipe.emoji}</span>
        <div>
          <h2 className="detail-name">{recipe.name}</h2>
          <p className="detail-meta">
            {recipe.time} · {recipe.servings} servings
          </p>
        </div>
      </div>

      <Section title="Ingredients">
        <IngredientsList ingredients={recipe.ingredients} />
      </Section>

      <Section title="Steps">
        <StepList steps={recipe.steps} />
      </Section>
    </div>
  );
}
