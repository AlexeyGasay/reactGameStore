import React from 'react';

let initialState = {
    searchText: "test",
}


export default function shopReducer(state = initialState, action) {
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
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: text
    }
}


export default LibraryReducer;