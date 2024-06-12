import axios from 'axios';
import React, { useState } from 'react';
import './Addcustomer.css'; // Import CSS file

const AddCustomer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/customers', { name, email, phone })
            .then(response => {
                console.log('Customer added:', response.data);
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="form-container"> {/* Apply container styling */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button type="submit">Add Customer</button>
            </form>
        </div>
    );
};

export default AddCustomer;
