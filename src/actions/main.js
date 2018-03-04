import {
  TAB_CREATE_ROOM
} from '../reducers/constants/constants'

export const switchTab = (tab) => {
  return { type: TAB_CREATE_ROOM, tab: tab };
};
