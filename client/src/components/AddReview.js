import React, { useState } from 'react';
import './AddReview.css';


const AddReview = () => {

    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState('Rating');

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
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}

export default AddReview;
