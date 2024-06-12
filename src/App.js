import React from 'react';
import './App.css';
import CustomerList from './components/CustomerList.js';
import AddCustomer from './components/Addcustomer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mini CRM</h1>
      </header>
      <main>
        <AddCustomer />
        <CustomerList />
      </main>
    </div>
  );
}

export default App;
