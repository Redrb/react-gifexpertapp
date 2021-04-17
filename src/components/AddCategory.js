import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState("Inicial");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handletSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length>2){
        setCategories(cats => [inputValue,...cats]);
        setInputValue("");
    }
  };

  return (
    <form onSubmit={handletSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,    
}
