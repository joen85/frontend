import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/*
 * 액션 타입 정의
 */
const SET_MYLIST = 'mylist/SET_MYLIST';

/*
 * 액션 생성 함수 정의
 */
export const setMylist = createAction(SET_MYLIST);
 /*
  * 초기상태 정의f
  */
 const initialState = Map({
     mylist: [],
 });

 /*  
 * reducer 작성
 */
export default handleActions({
  [SET_MYLIST] : (state, action) => {
    return state.set('myList', action.payload)
  }
}, initialState)
