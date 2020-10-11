import React from "react";
import { connect } from "react-redux";

import StarRating from "../star-rating/star-rating.component";

import "./color-list.styles.css";

const ColorList = ({ colors }) => {
  return (
    <div className="color-list">
      {!colors.length ? (
        <p>No Color Listed. (Add a Color) </p>
      ) : (
        colors.map((c) => <StarRating key={c.id} colors={c} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  colors: state.data.colors,
});

export default connect(mapStateToProps)(ColorList);
