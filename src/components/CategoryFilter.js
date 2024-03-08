import React from "react";
import { useState } from "react";

function CategoryFilter({categories, handleCategoryFilter}) { // don't miss the {} inside the function

  // const [categories, setCategories] = useState(CATEGORIES)
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (category) => {
    setSelectedButton(category);
    handleCategoryFilter(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => (
        <button class={selectedButton === category ? "selected" : ""} key={category} onClick={() => handleClick(category)} >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;