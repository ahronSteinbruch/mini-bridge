import React from "react";

const api_url = 'https://raw.githubusercontent.com/ahronSteinbruch/mini-bridge/main/src/card_images/';

const cards = Array.from({ length: 52 }, (_, index) => {
  const typeIndex = Math.floor(index / 13);
  const type = ['Heart', 'Diamond', 'Club', 'Spade'][typeIndex];
  const number = (index % 13) + 1;

  return {
    number,
    img: `${api_url}${index + 1}.svg`,
    type,
  };
});

// Your React component that uses the cards array
const CardComponent = () => {
  return cards;
};

export default CardComponent;
