import React from 'react';
import './Table.css';

const Table = ({ runners }) => {
    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            {
                runners.map((runner, i) => {
                    return (
                        <tr>
                            <td>{runner.givenName}</td>
                            <td>{runner.familyName}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}



export default Table;