import React from 'react'
import TableDropdown from "./TableDropdown"
import Date from "./StartDate"
import PriorityDropdown from "./PriorityDropdown"
import EmployeeImage from "./EmployeeImage"


function TableDashboard({ No, name, tableDropdown, image, priorityDropdown }) {

    var textColor;
    switch (tableDropdown) {
        case 0:
            textColor = 'Tomato';
            break;
        case 2:
            textColor = 'darkcyan';
            break;
        case 3:
            textColor = 'darkorange';
            break;
        case 4:
            textColor = 'crimson';
            break;
        case 5:
            textColor = 'darkslateblue';
            break;
        case 1:
        default:
            textColor = 'black';
    }

    var PriorityColor;
    switch (priorityDropdown) {
        case 0:
            PriorityColor = 'Tomato';
            break;
        case 1:
            PriorityColor = 'darkslateblue';
            break;
        case 2:
            PriorityColor = 'darkcyan';
            break;
        default:
            PriorityColor = 'black';
    }

    return (
        <tr >
            <td><input type="checkbox" /></td>
            <td>{No}</td>
            <td>{name}</td>
            <td><TableDropdown selectOption={tableDropdown} textColour={textColor} /></td>
            <td><Date /></td>
            <td><Date /></td>
            <td>
                <EmployeeImage employee={image} />
            </td>
            <td>
                <PriorityDropdown selectOption={priorityDropdown} PriorityColor = {PriorityColor} />
            </td>
        </tr>
    )
}

export default TableDashboard