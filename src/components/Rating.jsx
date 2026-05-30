import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  let arr = new Array(5).fill(0);

  return (
    <div className='container' onMouseLeave={() => setHover(0)}>
      <h1 className='heading'>Star rating</h1>
      {
        arr.map((_, index) => {
          return (
            <span
              key={index}
              onMouseEnter={() => setHover(index + 1)}
              onClick={() => setRating(index + 1)}
              className={index < (hover || rating) ? "colored" : "unColor"}
            >
              &#9733;
            </span>
          );
        })
      }
    </div>
  );
};

export default Rating;