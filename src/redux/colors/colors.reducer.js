import ColorTypeAction from "./color.types";

const initialState = {
  colors: [
    {
      id: "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
      title: "Dark Periwinkle",
      color: "#575fcf",
      rating: 5,
    },
    {
      id: "83c7ba2f-7392-4d7d-9e23-35adbe186046",
      title: "Green Teal",
      color: "#05c46b",
      rating: 3,
    },
    {
      id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
      title: "bright red",
      color: "#ff0000",
      rating: 1,
    },
  ],
  sort: "SORT_BY_DATE",
};

const ColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ColorTypeAction.ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.payload]
      };
    case ColorTypeAction.REMOVE_COLOR:
      return {
        ...state,
        colors: state.colors.filter((color) => color.id !== action.payload.id)
      };
    case ColorTypeAction.RATING_COLOR:
      return {
        ...state,
        colors: state.colors.map((color) =>
          color.id === action.id ? { ...color, rating: action.rating } : color
        )
      };
    case ColorTypeAction.SORT_COLOR:
      return {
        ...state,
        sort: action.sortBy
      };
    default:
      return state;
  }
};

export default ColorReducer;
