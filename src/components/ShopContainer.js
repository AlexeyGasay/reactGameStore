import { connect } from "react-redux"
import Shop from './Shop'

import {updateSearchTextAC} from '../reducers/CommonReducer';

let mapStateToProps = (state) => {
    return {
        searchText: state.commonData.searchText,
        img: state.shopPage.img

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateSearchText(text) {
            dispatch(updateSearchTextAC(text))
        }

    }
}



const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);


export default ShopContainer;