import { React, useState } from 'react'

function TableDropdown({ selectOption, textColour }) {
    var options = [
        { id: 1, name: 'Pending' },
        { id: 2, name: 'InProgress' }, 
        { id: 3, name: 'Completed' }, 
        { id: 4, name: 'Testing' }, 
        { id: 5, name: 'Cancelled' }, 
        { id: 6, name: 'Yet to start' }];
        console.log({textColour})
    const [selected, setSelected] = useState(options[selectOption].id);
    const [textColor, setTextColor] = useState(textColour);


    const colorChange = (value) => {
        switch (value) {
            case "1":
                setTextColor('Tomato');
                break;
            case "3":
                setTextColor('darkcyan');
                break;
             case "4":
                setTextColor('darkorange');
                break;
             case "5":
                setTextColor('crimson');
                break;
             case "6":
                setTextColor('darkslateblue');
                break;
            case "2":
            default:
                setTextColor('black');
        }
    }

    const handleChange = event => {
        const value = (event.target.value)
        setSelected(value);
        colorChange(value);
        
    };

    return (
        <select value={selected} onChange={handleChange} style={{ color: textColor, borderBlockColor: textColor}}>
            {options.map(option => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default TableDropdown