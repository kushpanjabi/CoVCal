import React, { useState } from 'react';
import './AddSite.css'

const AddSite = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('Price Range');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { name, location, price_range: priceRange };
            const response = await fetch('http://localhost:5000/sites', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }); 
            window.location = '/home';
            console.log(response);
        } catch (err) {
            console.log(err);
        }


    }
    return (
        <div className="full-form">
            <form className="form-inline" action="/action_page.php">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" name="name" />
                <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" id="pwd" placeholder="Location" name="location" />
                    <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                <button onClick={handleSubmit} type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddSite;