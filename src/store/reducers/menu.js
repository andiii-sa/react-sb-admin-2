import { CLICK_OPEN_MENU } from "constants/types/menu";

const initialState = {
  menuOpen: false,
};

const menuOpenReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_OPEN_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };

    default:
      return state;
  }
};

export default menuOpenReducer;
