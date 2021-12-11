import { connect } from "react-redux"
import Library from './Library'

import { likeGameAC } from '../reducers/ShopReducer';

let mapStateToProps = (state) => {
    return {
        data: state.shopPage.Games

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        likeGame (game) {
            dispatch(likeGameAC(game))
        }

    }
}



const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(Library);


export default LibraryContainer;