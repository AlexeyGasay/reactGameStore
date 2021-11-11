import React from 'react';
import {
    NavLink
} from "react-router-dom";



const Header = props => {
    // debugger
    return (
        <>
            <nav className="navHeader">

                <ul>
                    <li>
                        <NavLink to="/shop">

                            Магазин

                        </NavLink>

                    </li>

                    <li>
                        <NavLink to="/library">

                            Библиотека

                        </NavLink>

                    </li>



                </ul>

            </nav>
        </>
    );
};


export default Header;