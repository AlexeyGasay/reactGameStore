import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
const UPDATE_SEARCH_TEXT = "UPDATE_SEARCH_TEXT";
import {updateSearchTextAC} from '../../reducers/CommonReducer'

const searchInput = props => {

    const searchText = useSelector(state => state.commonData.searchText)
    // debugger

    const dispatch = useDispatch();



    const onSearchChange = e => {
        // debugger
        // dispatch({type: UPDATE_SEARCH_TEXT, payload: e.target.value})
        dispatch(updateSearchTextAC(e.target.value))
    }
    return (
        <>
            
            <div className="searchBox">

                <input type="text" value={searchText} onChange={onSearchChange}/>

            </div>

        </>
    );
};



export default searchInput;