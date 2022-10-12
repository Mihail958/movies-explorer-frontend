import React from "react";
import '../FilterCheckbox/FilterCheckbox.css'

function FilterCheckbox(props) {

  return (
    <div className="filter-checkbox__switch-box">
      <p className="filter-checkbox__text">Короткометражки</p>
      <label 
          className={`button filter-checkbox__switch-button ${props.onChecked && 'filter-checkbox__switch-button-active'}`}
       >
        <input
          className="filter-checkbox__input"
          type="checkbox"
          onChange={props.checkShort}
          checked={props.onChecked}
        />
      </label>
      
    </div>
  );
}

export default FilterCheckbox;