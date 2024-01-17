import React, { useState } from "react";
import { BookList, Book } from "./BookCard.jsx";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, onRatingChange }) => {
    const [hoverRating, setHoverRating] = useState(null);

    const handleClick = (index) => {
        onRatingChange && onRatingChange(index);
    };

    const stars = Array.from({ length: 5 }, (_, index) => (
        <FaStar
            key={index}
            color={index < (hoverRating !== null ? hoverRating : rating) ? "#ffc107" : "#e4e5e9"}
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(null)}
            style={{ cursor: "pointer" }}
        />
    ));

    return <div>{stars}</div>;
};

export function Card() {
    const [ratings, setRatings] = useState([4, 1, 2]);

    const handleRatingChange = (index, newRating) => {
        const newRatings = [...ratings];
        newRatings[index] = newRating;
        setRatings(newRatings);
    };

    return (
        <div className={"card"}>
            <BookList>
                {ratings.map((rating, index) => (
                    <Book key={index}>
                        <div>
                            <img src="https://reactjs.org/logo-og.png" alt="React Image" className={"img"} />
                        </div>
                        <div className={"levaaa"}>
                            <div className={"nahore"}>{`Book ${index + 1}`}</div>
                            <div className={"dole"}>{`Author ${index + 1}`}</div>
                        </div>
                        <div className={"a"}>
                            <StarRating rating={rating} onRatingChange={(newRating) => handleRatingChange(index, newRating)} />
                        </div>
                    </Book>
                ))}
            </BookList>
        </div>
    );
}