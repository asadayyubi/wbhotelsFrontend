import { SIDEBAR_ACTIVE, THEME } from "../types/styles";

export const toggleSidebar = (isOpen) => async (dispatch) => {
  dispatch({ type: SIDEBAR_ACTIVE, payload: isOpen });
};

export const setTheme = (isDarkTheme) => async (dispatch) => {
  dispatch({ type: THEME, payload: isDarkTheme });
};
