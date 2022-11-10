import Reducer from "../reducers/Reducer.js";
import { createStore,combineReducers } from 'redux'



const Store = createStore(Reducer);

export default Store;