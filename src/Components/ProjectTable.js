import React from 'react'
import { Button, Table } from "react-bootstrap";
import { Download } from "react-bootstrap-icons"
import TableDashboard from './TableDashboard';

function ProjectTable() {
    return (
        <div id='tableDiv'>
            <div>
                <h4>All Details about the project</h4>
                <div id='downloadDiv'>
                    <Button variant="secondary" ><Download /> Export</Button>
                </div>
            </div>
            <div id='table-division'>
                <Table hover striped bordered>
                    <thead>
                        <tr >
                            <th scope="col" width="5%"><input type="checkbox" /></th>
                            <th scope="col" width="5%">#</th>
                            <th scope="col" width="20%">Project Title</th>
                            <th scope="col" width="10%">Status</th>
                            <th scope="col" width="15%">Start Date</th>
                            <th scope="col" width="15%">End Date</th>
                            <th scope="col" width="15%">Assigned To</th>
                            <th scope="col" width="15%">Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableDashboard No={1} name={'Create Frontend WordPress'} tableDropdown={0} image={2} priorityDropdown={0} />
                        <TableDashboard No={2} name={'HTML To React Convert'} tableDropdown={1} image={3} priorityDropdown={2} />
                        <TableDashboard No={2} name={'HTML template Issue Complete'} tableDropdown={2} image={4} priorityDropdown={1} />
                        <TableDashboard No={3} name={'Complete Admin Dashboard Project'} tableDropdown={3} image={5} priorityDropdown={1} />
                        <TableDashboard No={4} name={'Create Frontend WordPress'} tableDropdown={4} image={3} priorityDropdown={2} />
                        <TableDashboard No={5} name={'HTML To React Convert'} tableDropdown={5} image={5} priorityDropdown={0} />
                        <TableDashboard No={6} name={'HTML template Issue Complete'} tableDropdown={5} image={5} priorityDropdown={0} />
                        <TableDashboard No={7} name={'Complete Admin Dashboard Project'} tableDropdown={4} image={4} priorityDropdown={2} />
                        <TableDashboard No={8} name={'Create Frontend WordPress'} tableDropdown={3} image={3} priorityDropdown={1} />
                        <TableDashboard No={9} name={'HTML To React Convert'} tableDropdown={2} image={2} priorityDropdown={1} />
                        <TableDashboard No={10} name={'HTML template Issue Complete'} tableDropdown={1} image={5} priorityDropdown={2} />
                        <TableDashboard No={11} name={'Complete Admin Dashboard Project'} tableDropdown={0} image={4} priorityDropdown={0} />
                        <TableDashboard No={12} name={'HTML To React Convert'} tableDropdown={5} image={3} priorityDropdown={1} />
                        <TableDashboard No={13} name={'Create Frontend WordPress'} tableDropdown={4} image={2} priorityDropdown={1} />
                        <TableDashboard No={14} name={'Complete Admin Dashboard Project'} tableDropdown={3} image={5} priorityDropdown={2} />
                        <TableDashboard No={15} name={'HTML template Issue Complete'} tableDropdown={2} image={1} priorityDropdown={0} />
                        <TableDashboard No={16} name={'HTML To React Convert'} tableDropdown={1} image={5} priorityDropdown={2} />
                        <TableDashboard No={17} name={'Create Frontend WordPress'} tableDropdown={0} image={3} priorityDropdown={1} />
                        <TableDashboard No={18} name={'Complete Admin Dashboard Project'} tableDropdown={1} image={5} priorityDropdown={1} />
                        <TableDashboard No={19} name={'HTML template Issue Complete'} tableDropdown={2} image={4} priorityDropdown={2} />
                        <TableDashboard No={20} name={'Create Frontend WordPress'} tableDropdown={3} image={2} priorityDropdown={2} />
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ProjectTable