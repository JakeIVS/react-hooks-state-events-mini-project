import React from "react";

function CategoryFilter({ categories, onCatChange }) {

  const catBtns = categories.map(cat=>(
    <button key={cat} onClick={()=>onCatChange(cat)} >{cat}</button>
    ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtns}
    </div>
  );
}

export default CategoryFilter;
