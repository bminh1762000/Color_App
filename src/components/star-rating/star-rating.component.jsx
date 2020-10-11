import React from "react";
import { connect } from "react-redux";

import { removeColor, ratingColor } from "../../redux/colors/colors.actions.js";
import Star from "../star/start.component";

import "./star-rating.styles.css";

const StarRating = ({ colors, removeColor, onRate }) => {
  const { title, color, rating, id } = colors;

  return (
    <div className="color" style={{ backgroundColor: `${color}` }}>
      <button className="btn-remove" onClick={() => removeColor(colors)}>
        X
      </button>
      <p className="title">{title}</p>
      <div className="star-rating">
        {[...Array(5)].map((value, i) => (
          <Star
            key={i}
            selected={i < rating}
            onRate={() => onRate(id,i+1)}
          />
        ))}
      </div>
      <p>
        {rating} of {5} stars
      </p>
    </div>
  );
};

const mapStateToDispatch = (dispatch) => ({
  removeColor: (colors) => dispatch(removeColor(colors)),
  onRate :  (i,rating) => dispatch(ratingColor(i,rating))
});

export default connect(null, mapStateToDispatch)(StarRating);
