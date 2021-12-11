import { combineReducers } from "redux";
import {createStore} from "redux";
import ShopReducer from "./ShopReducer";
import CommonReducer from './CommonReducer'
import sliderReducer from './SliderReducer'

const rootReducers = combineReducers({
    shopPage: ShopReducer,
    commonData: CommonReducer,
    sliderData: sliderReducer,
    
})


 const store = createStore(rootReducers);

 
export default store;