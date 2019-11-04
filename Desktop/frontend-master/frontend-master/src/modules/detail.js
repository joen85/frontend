import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/*
 * 액션 타입 정의
 */
const SET_STORE = 'detail/SET_STORE';
const SET_MENU = 'detail/SET_MENU';
const SET_FILE = 'detail/SET_FILE';

/*
 * 액션 생성 함수 정의
 */
export const setStore = createAction(SET_STORE);
export const setMenu = createAction(SET_MENU);
export const setFile = createAction(SET_FILE);

 /*
  * 초기상태 정의
  */
 const initialState = Map({
     detail: [],
 });

 /*
 * reducer 작성
 */
export default handleActions({
  [SET_STORE] : (state, action) => {
    return state.set('storeList', action.payload)
  },
  [SET_MENU] : (state, action) => {
    return state.set('menuList', action.payload)
  },
  [SET_FILE] : (state, action) => {
    return state.set('fileList', action.payload)
  }
}, initialState)
