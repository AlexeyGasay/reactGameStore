import React from 'react';
const UPDATE_SEARCH_TEXT = "UPDATE_SEARCH_TEXT";

let initialState = {
    searchText: "test",
}


export default function CommonReducer(state = initialState, action) {
    // debugger
    switch(action.type) {
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }


        default: 
            return state
    }
}


export const updateSearchTextAC = text => {
    // debugger
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: text
    }
}

