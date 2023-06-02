import { SIDEBAR_ACTIVE, THEME } from "../types/styles";

const initialState = {
  sidebarActive: false,
  darkTheme: false,
};

const stylesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIDEBAR_ACTIVE:
      return { ...state, sidebarActive: payload };
    case THEME:
      return { ...state, darkTheme: payload };
    default:
      return state;
  }
};

export default stylesReducer;
