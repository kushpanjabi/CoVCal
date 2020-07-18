import React, { useState, useContext } from 'react';
import { SitesContext } from '../context/SitesContext';
import { useParams } from 'react-router-dom';
import './UpdateSite.css'


const UpdateSite = (props) => {
    const { id } = useParams();
    const { sites } = useContext(SitesContext);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const body = { name, location, price_range: priceRange };
            const response = await fetch(`http://localhost:5000/sites/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }); 
            window.location = '/';
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="full-form">
            <h3>Update Testing site</h3>
            <form className="form-inline" action="/action_page.php">
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name" name="name" />
                <input value={location} onChange={e => setLocation(e.target.value)} type="text" placeholder="Location" name="location" />
                    <select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                <button type="submit" onClick={handleUpdate}>Update</button>
            </form>
        </div>
    )
}

export default UpdateSite;