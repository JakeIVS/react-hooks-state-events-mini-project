import React from "react";

function CategoryFilter({ categories, onCatChange, selectedCategory }) {
  const catBtns = categories.map(cat=>{
    const className = (cat === selectedCategory ? 'selected' : null)
    return <button key={cat} className={className} onClick={()=>onCatChange(cat)} >{cat}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtns}
    </div>
  );
}

export default CategoryFilter;
