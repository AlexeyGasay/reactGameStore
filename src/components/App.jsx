import React from 'react'
import {Route } from "react-router-dom";

import Header from './Header'
import ShopContainer from './ShopContainer'
import LibraryContainer from './LibraryContainer'
import Game from './Game';
import SearchGames from './SearchGames';

const App = () => {




    return (


        <div className="App">

            <Route path="*" component={Header}>

            </Route>


            <div className="main">

                <Route path='/shop' render={() =>
                    <ShopContainer />
                } />

                <Route path="/game" component={Game} />
                <Route path="/searchGames" component={SearchGames} />

                <Route path='/library' render={() =>
                    <LibraryContainer />
                } />


            </div>

        </div>

    )
}

export default App;