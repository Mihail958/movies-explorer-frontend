import React from "react";
import '../FilterCheckbox/FilterCheckbox.css'

function FilterCheckbox(props) {
    const [isSwitchButton, setIsSwitchButton] = React.useState(false);

    function handleSwitchButtonClick () {
        if (isSwitchButton === false) {
            setIsSwitchButton(true);
        } else {
            setIsSwitchButton(false);
        }
        
    }

  return (
    <div className="filter-checkbox__switch-box">
      <p className="filter-checkbox__text">Короткометражки</p>
      <label 
          className={`button filter-checkbox__switch-button ${isSwitchButton && 'filter-checkbox__switch-button-active'}`}
          onClick={handleSwitchButtonClick}
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