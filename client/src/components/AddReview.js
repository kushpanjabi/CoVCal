import React, { useState } from 'react';
import './AddReview.css';
import { useParams } from 'react-router-dom';


const AddReview = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState('Rating');

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        try {
            const body = { name, review: reviewText, rating };
            const response = await fetch(`http://localhost:5000/sites/${id}/addReview`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }); 
            window.location = `/sites/${id}`;
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="center-and-space">
            <form className="form-inline" action="/action_page.php">
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name" name="name" />
                    <select value={rating} onChange={e => setRating(e.target.value)}>
                        <option disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <textarea value={reviewText} onChange={e => setReviewText(e.target.value)}type="text" placeholder="Tell us about your experience!" name="review" />
                <button onClick={handleSubmitReview}>Submit</button>
            </form>
        </div>
        
    )
}

export default AddReview;
