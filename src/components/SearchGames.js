import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { chooseGameAC } from '../reducers/CommonReducer';
const SearchGames = props => {
    debugger

    const games = useSelector(state => state.commonData.Games);
    const selectedTag = useSelector(state => state.commonData.selectedTag);
    const dispatch = useDispatch()
    return (
        <div>

            <div className="filteredGames">

        

            <ul className="listOfGames">


                {games.map((el) => {
                    if (el.tags.includes(selectedTag)) {

                        return <NavLink to="/game"
                            onClick={() => dispatch(chooseGameAC(el.name))} key={el.id}>

                            <li key={el.id}>


                                <div>
                                    <img src={el.img[0]} />

                                </div>

                                <div>
                                    {el.name}
                                    <ul className="tags">

                                        {el.tags.map((tag) => <li key={tag}>{tag}</li>)}

                                    </ul>
                                </div>

                                <div>

                                    {el.price <= 0 ? "Free" : el.price}

                                </div>

                            </li>
                        </NavLink>
                    }






                })}

            </ul>
            </div>

        </div>
    );
};


export default SearchGames;