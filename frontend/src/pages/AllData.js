import { useState } from "react";
import Table from 'react-bootstrap/Table';

export default function AllData({ logs }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Deposit</th>
                    <th>Withdraw</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {logs.map((log) => {
                    return (
                        <tr>
                            <td>{log.name}</td>
                            <td>{log.email}</td>
                            <td>{log.password}</td>
                            <td>{log.deposit}</td>
                            <td>{log.withdraw}</td>
                            <td>{log.balance}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}