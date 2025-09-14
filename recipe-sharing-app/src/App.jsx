
import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'navy', textAlign: 'center', marginBottom: '20px' }}>
        Recipe Sharing App
      </h1>

      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
