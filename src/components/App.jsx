import React from 'react'
import '../index.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from './Header'
import ShopContainer from './ShopContainer'
import LibraryContainer from './LibraryContainer'



const App = () => {




    return (


        <div className="App">

            <Route path="*" component={Header}>

            </Route>


            <div className="main">

                <Route path='/shop' render={() =>
                    <ShopContainer />
                } />

                <Route path='/*' render={() =>
                    <LibraryContainer />
                } />


            </div>

        </div>

    )
}

export default App;