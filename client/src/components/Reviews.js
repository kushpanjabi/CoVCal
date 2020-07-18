import React from 'react';
import StarRating from './StarRating';
import './Reviews.css';


const Reviews = ({reviews}) => {
    return (
        <div className="cards-container">
            {reviews.map((review) => {
                return (
                    <div key={review.id} className="w3-card-4 card-box">
                    <header className="w3-container w3-light">
                    <h3 className="name-card">{review.name}</h3>
                    <span className="star"><StarRating rating={review.rating} /></span>
                    </header>
                    <div className="w3-container">
                    <p>{review.review}</p>
                    </div>
                    </div>
                )
            })}

        {/* <div className="w3-card-4 card-box">
        <header className="w3-container w3-light">
        <h3 className="name-card">Joann</h3>
        <span className="star"><StarRating rating={3} /></span>
        </header>
        <div className="w3-container">
        <p>Great experience!</p>
        </div>
        </div>

        <div className="w3-card-4 card-box">
        <header className="w3-container w3-light">
        <h3 className="name-card">Joann</h3>
        <span className="star"><StarRating rating={3} /></span>
        </header>
        <div className="w3-container">
        <p>Great experience!</p>
        </div>
        </div>
            
        <div className="w3-card-4 card-box">
        <header className="w3-container w3-light">
        <h3 className="name-card">Joann</h3>
        <span className="star"><StarRating rating={3} /></span>
        </header>
        <div className="w3-container">
        <p>Great experience!</p>
        </div>
        </div>

        <div className="w3-card-4 card-box">
        <header className="w3-container w3-light">
        <h3 className="name-card">Joann</h3>
        <span className="star"><StarRating rating={3} /></span>
        </header>
        <div className="w3-container">
        <p>Great experience!</p>
        </div>
        </div> */}

        </div>
    )
}

export default Reviews;
