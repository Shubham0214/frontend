import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateCustomer = ({ customerId, onUpdate }) => {
    const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/customers/${customerId}`)
            .then(response => setCustomer(response.data))
            .catch(error => console.error(error));
    }, [customerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/customers/${customerId}`, customer)
            .then(response => {
                console.log('Customer updated:', response.data);
                onUpdate();  // callback to refresh the customer list
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={customer.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={customer.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" name="phone" value={customer.phone} onChange={handleChange} />
            </div>
            <button type="submit">Update Customer</button>
        </form>
    );
};

export default UpdateCustomer;
