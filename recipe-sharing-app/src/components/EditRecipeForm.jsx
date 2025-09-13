// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description,
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // مهم جداً لتجنب إعادة تحميل الصفحة
    if (recipe) {
      updateRecipe(recipe.id, formData);
      alert('تم تحديث الوصفة!');
    }
  };

  if (!recipe) return <p>الوصفة غير موجودة</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">حفظ التعديلات</button>
    </form>
  );
};

export default EditRecipeForm;
