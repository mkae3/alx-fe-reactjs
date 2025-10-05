// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Remove validate function from this file and import it from validate.js
import { validate } from '../utils/validate';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // use the validate function
    const newErrors = validate({ title, ingredients, instructions });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // create new recipe object (for now just log it)
      const newRecipe = {
        id: Date.now(),
        title: title.trim(),
        ingredients: ingredients.split(',').map((item) => item.trim()).filter(Boolean),
        instructions: instructions.split('\n').map((item) => item.trim()).filter(Boolean),
      };

      console.log('New Recipe:', newRecipe);

      // Reset form
      setTitle('');
      setIngredients('');
      setInstructions('');
      setErrors({});

      // Optionally navigate back to home
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? 'border-red-500' : ''
            }`}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.ingredients ? 'border-red-500' : ''
            }`}
          />
          {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="6"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.instructions ? 'border-red-500' : ''
            }`}
          />
          {errors.instructions && <p className="text-red-500 text-xs mt-1">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
