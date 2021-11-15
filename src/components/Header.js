import React from 'react';
import {
    NavLink
} from "react-router-dom";
import SearchInput from './common/SearchInput';


const Header = props => {
    // debugger
    return (
        <>
            <nav className="navHeader">

                <ul>
                    <li>
                        <NavLink to="/shop"
                        
                            activeStyle={
                                {
                                    textDecoration: "underline",
                                    transition: "1s",
                                    
                                }
                            }
                        
                        >

                            Магазин

                        </NavLink>

                    </li>

                    <li>
                        <NavLink to="/library"
                        
                        activeStyle={
                            {
                                textDecoration: "underline",
                                transition: "1s",
                                
                            }
                        }>

                            Библиотека

                        </NavLink>

                    </li>



                </ul>

            <SearchInput />
            </nav>


        </>
    );
};


export default Header;