import React, { useState } from "react";
import uid from "uid";
import { connect } from "react-redux";
import { addColor } from "../../redux/colors/colors.actions";

import "./form-add-color.styles.css";

const FormAddColor = ({ addColor }) => {
  const initialValues = {
    title: "",
    color: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addColor({ id: uid(), ...values, rating: 0 });
    setValues(initialValues);
  };

  return (
    <div className="form-add-color">
      <form onSubmit={handleSubmit}>
        <label>Title :</label>
        <input
          type="text"
          name="title"
          placeholder="Title ..."
          value={values.title}
          onChange={handleChange}
        />
        <label>Color :</label>
        <input
          type="color"
          name="color"
          placeholder="Color ..."
          value={values.color}
          onChange={handleChange}
        />
        <button className="btn-add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

const mapStateToDispatch = (dispatch) => ({
  addColor: (color) => dispatch(addColor(color)),
});

export default connect(null, mapStateToDispatch)(FormAddColor);
