import React, { useState } from 'react';
import '../styles/ButtonExample.css';

const ButtonExample = () => {
    const [buttons, setButtons] = useState([]);

    const handleAddButton = () => {
        setButtons([...buttons, `Delete ${buttons.length + 1}`]);
    };

    const handleDeleteButton = (index) => {
        const updatedButtons = buttons.filter((_, i) => i !== index);
        setButtons(updatedButtons);
    };

    return (
        <div className="button-example">
            <h2>Add/Remove Elements</h2>
            <button onClick={handleAddButton} className="add-button">
                Add Element
            </button>
            <div className="dynamic-buttons example" id="elements">
                {buttons.map((buttonLabel, index) => (
                    <button
                        key={index}
                        className="dynamic-button"
                        onClick={() => handleDeleteButton(index)}
                    >
                        {buttonLabel}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonExample;
