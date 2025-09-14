import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, filterRecipes } = useRecipeStore();

  // فلترة تلقائية كل ما تغيّر مصطلح البحث
  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {displayRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
