import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyupsal",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1841-e1499218891863.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Kimbap",
    image:
      "https://jajabakes.com/wp-content/uploads/2018/08/cut-kimbab-recipe-1.jpg",
    rating: 4.4,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
