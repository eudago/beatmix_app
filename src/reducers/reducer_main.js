import {
  TAB_CREATE_ROOM
} from './constants/constants'

const initialMainState = { tab: 'create_room' };

function main(state = initialMainState, action) {
  switch (action.type) {
    case TAB_CREATE_ROOM:
      return { ...state, tab: action.tab };
    default:
      return state;
  }
}

export default main;
