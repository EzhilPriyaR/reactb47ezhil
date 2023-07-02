import { React, useState } from 'react'

function PriorityDropdown({ selectOption, PriorityColor }) {
    var options = [{ id: 1, name: 'Low' }, { id: 2, name: 'Medium' }, { id: 3, name: 'High' }];
    const [selected, setSelected] = useState(options[selectOption].id);
    const [textColor, setTextColor] = useState(PriorityColor);

    const colorChange = (value) => {
        switch (value) {
            case "1":
                setTextColor('Tomato');
                break;
            case "2":
                setTextColor('darkslateblue');
                break;
            case "3":
                setTextColor('darkcyan');
                break;
            default:
                setTextColor('black');
        }
    }

    const handleChange = event => {
        setSelected(event.target.value);
        colorChange(event.target.value);
    };

    return (
        <select value={selected} onChange={handleChange} style={{ color: textColor, borderBlockColor: textColor }}>
            {options.map(option => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    )

}

export default PriorityDropdown