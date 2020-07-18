import React from 'react';
import './StarRating.css'

const StarRating = ({rating}) => {
    const stars = [];
    for (let i=1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className="fas fa-star yellow"></i>)
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i key={i} className="fas fa-star-half-alt yellow"></i>)
        } else {
            stars.push(<i key={i} className="far fa-star yellow"></i>)
        }
    }
    return (
        <>
        {stars}
        </>
    )
}

export default StarRating;
