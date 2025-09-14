import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
