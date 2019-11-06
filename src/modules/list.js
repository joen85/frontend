import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/*
 * 액션 타입 정의
 */
const SET_LIST = 'list/SET_LIST';

/*
 * 액션 생성 함수 정의
 */
export const setList = createAction(SET_LIST);

 /*
  * 초기상태 정의
  */
 const initialState = Map({
     list: [],
 });

 /*
 * reducer 작성
 */
export default handleActions({
  [SET_LIST] : (state, action) => {
    return state.set('list', action.payload)
  }
}, initialState)
