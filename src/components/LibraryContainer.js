import React from 'react'
import { connect } from "react-redux"
import Library from './Library'

import {updateSearchTextAC} from '../reducers/CommonReducer';

let mapStateToProps = (state) => {
    // debugger;
    return {
        // searchText: state.commonData.searchText
        data: state.shopPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        

    }
}



const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(Library);


export default LibraryContainer;