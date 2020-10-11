import ColorTypeAction from "./color.types";

export const addColor = (color) => ({
  type: ColorTypeAction.ADD_COLOR,
  payload: color,
});

export const removeColor = (color) => ({
  type: ColorTypeAction.REMOVE_COLOR,
  payload: color,
});

export const ratingColor = (id, rating) => ({
  type: ColorTypeAction.RATING_COLOR,
  id,
  rating,
});

export const sortColor = (sortedBy) =>
  sortedBy === "rating"
    ? {
        type: ColorTypeAction.SORT_COLOR,
        sortBy: "SORTED_BY_RATING",
      }
    : sortedBy === "title"
    ? {
        type: ColorTypeAction.SORT_COLOR,
        sortBy: "SORTED_BY_TITLE",
      }
    : {
        type: ColorTypeAction.SORT_COLOR,
        sortBy: "SORTED_BY_DATE",
      };
