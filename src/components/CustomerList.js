import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []); // Fetch customers on initial component mount

    const fetchCustomers = () => {
        axios.get('http://localhost:5000/api/customers')
            .then(response => {
                setCustomers(response.data); // Update state with fetched customers
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
