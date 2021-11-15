import { combineReducers } from "redux";
import {createStore} from "redux";
import ShopReducer from "./ShopReducer";
import CommonReducer from './CommonReducer'
import sliderReducer from './SliderReducer'
// import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    shopPage: ShopReducer,
    commonData: CommonReducer,
    sliderData: sliderReducer,
    
})


 const store = createStore(rootReducers);

 window.qwe = store.getState();

 
export default store;