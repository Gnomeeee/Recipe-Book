import { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import recipes from "./data/recipes";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-wrap">
      {selected === null ? (
        <RecipeList recipes={recipes} onSelect={setSelected} />
      ) : (
        <RecipeDetail recipe={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  );
}
