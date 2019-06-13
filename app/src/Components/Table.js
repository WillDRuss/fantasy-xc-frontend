import React from 'react';
import './Table.css';

const Table = ({ runners }) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            {
                runners.map((runner, i) => {
                    return (
                        <tr key={i}>
                            <td>{runner.givenName}</td>
                            <td>{runner.familyName}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}



export default Table;
