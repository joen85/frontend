import { combineReducers } from 'redux';
import list from './list';
import detail from './detail';
import mylist from './mylist';

export default combineReducers({
    list,
    detail,
    mylist
})
