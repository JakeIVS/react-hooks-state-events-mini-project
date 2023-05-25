import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
const [formData, setFormData] = useState({
  text:null,
  category:"Code"
})

  function handleFormChange(e) {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const options = categories.map(category=>{
   if (category !== "All") return <option key={category} name={category} >{category}</option>
  })

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData)
  }

  return (
    <form className="new-task-form" value={formData} 
    onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormChange} >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
