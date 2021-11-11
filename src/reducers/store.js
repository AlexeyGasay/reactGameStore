import { combineReducers } from "redux";
import {createStore} from "redux";
import ShopReducer from "./ShopReducer";
import CommonReducer from './CommonReducer'
// import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    shopPage: ShopReducer,
    commonData: CommonReducer,

})

 const store = createStore(rootReducers);

 
export default store;