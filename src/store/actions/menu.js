import { CLICK_OPEN_MENU } from "constants/types/menu";

export const clickMenuOpen = (value) => ({
  type: CLICK_OPEN_MENU,
  newValue: value,
});
