

import React from 'react';

const cards = [
  { number: 1, type: 'Heart', img: 'heart_image_url_1' },
  { number: 2, type: 'Heart', img: 'heart_image_url_2' },
  { number: 3, type: 'Heart', img: 'heart_image_url_3' },
  { number: 4, type: 'Heart', img: 'heart_image_url_4' },
  { number: 5, type: 'Heart', img: 'heart_image_url_5' },
  { number: 6, type: 'Heart', img: 'heart_image_url_6' },
  { number: 7, type: 'Heart', img: 'heart_image_url_7' },
  { number: 8, type: 'Heart', img: 'heart_image_url_8' },
  { number: 9, type: 'Heart', img: 'heart_image_url_9' },
  { number: 10, type: 'Heart', img: 'heart_image_url_10' },
  { number: 11, type: 'Heart', img: 'heart_image_url_11' },
  { number: 12, type: 'Heart', img: 'heart_image_url_12' },
  { number: 13, type: 'Heart', img: 'heart_image_url_13' },

  { number: 1, type: 'Diamond', img: 'diamond_image_url_1' },
  { number: 2, type: 'Diamond', img: 'diamond_image_url_2' },
  { number: 3, type: 'Diamond', img: 'diamond_image_url_3' },
  { number: 4, type: 'Diamond', img: 'diamond_image_url_4' },
  { number: 5, type: 'Diamond', img: 'diamond_image_url_5' },
  { number: 6, type: 'Diamond', img: 'diamond_image_url_6' },
  { number: 7, type: 'Diamond', img: 'diamond_image_url_7' },
  { number: 8, type: 'Diamond', img: 'diamond_image_url_8' },
  { number: 9, type: 'Diamond', img: 'diamond_image_url_9' },
  { number: 10, type: 'Diamond', img: 'diamond_image_url_10' },
  { number: 11, type: 'Diamond', img: 'diamond_image_url_11' },
  { number: 12, type: 'Diamond', img: 'diamond_image_url_12' },
  { number: 13, type: 'Diamond', img: 'diamond_image_url_13' },

  { number: 1, type: 'Spade', img: 'spade_image_url_1' },
  { number: 2, type: 'Spade', img: 'spade_image_url_2' },
  { number: 3, type: 'Spade', img: 'spade_image_url_3' },
  { number: 4, type: 'Spade', img: 'spade_image_url_4' },
  { number: 5, type: 'Spade', img: 'spade_image_url_5' },
  { number: 6, type: 'Spade', img: 'spade_image_url_6' },
  { number: 7, type: 'Spade', img: 'spade_image_url_7' },
  { number: 8, type: 'Spade', img: 'spade_image_url_8' },
  { number: 9, type: 'Spade', img: 'spade_image_url_9' },
  { number: 10, type: 'Spade', img: 'spade_image_url_10' },
  { number: 11, type: 'Spade', img: 'spade_image_url_11' },
  { number: 12, type: 'Spade', img: 'spade_image_url_12' },
  { number: 13, type: 'Spade', img: 'spade_image_url_13' },

  { number: 1, type: 'Club', img: 'club_image_url_1' },
  { number: 2, type: 'Club', img: 'club_image_url_2' },
  { number: 3, type: 'Club', img: 'club_image_url_3' },
  { number: 4, type: 'Club', img: 'club_image_url_4' },
  { number: 5, type: 'Club', img: 'club_image_url_5' },
  { number: 6, type: 'Club', img: 'club_image_url_6' },
  { number: 7, type: 'Club', img: 'club_image_url_7' },
  { number: 8, type: 'Club', img: 'club_image_url_8' },
  { number: 9, type: 'Club', img: 'club_image_url_9' },
  { number: 10, type: 'Club', img: 'club_image_url_10' },
  { number: 11, type: 'Club', img: 'club_image_url_11' },
  { number: 12, type: 'Club', img: 'club_image_url_12' },
  { number: 13, type: 'Club', img: 'club_image_url_13' },
];

// Your React component that uses the cards array
const CardComponent = () => {
  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          <p>Number: {card.number}</p>
          <p>Type: {card.type}</p>
          <img src={card.img} alt={`Card ${card.number}`} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
