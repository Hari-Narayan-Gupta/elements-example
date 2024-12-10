import React, { useState } from 'react';
import '../styles/CheckboxExample.css';

const CheckboxExample = () => {
    const options = ["checkbox 1", "checkbox 2"];
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div className="checkbox-example">
            <h2 className="checkbox-heading">Checkboxes</h2>
            <form className="checkbox-group" id="checkboxes">
                {options.map((option, index) => (
                    <React.Fragment key={index}>
                        <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            className='checkbox'
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        <label htmlFor={`checkbox-${index}`} className="checkbox-label">{option}</label>
                        <br />
                    </React.Fragment>
                ))}
            </form>
        </div>
    );
};

export default CheckboxExample;
