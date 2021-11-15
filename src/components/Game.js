import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { likeGameAC } from '../reducers/ShopReducer';
import { NavLink } from 'react-router-dom';
import { chooseTagAC } from '../reducers/CommonReducer';


const Game = props => {

    const dispatch = useDispatch();
    const selGame = useSelector(state => state.commonData.selectedGame);
    const games = useSelector(state => state.shopPage.Games)





    // debugger
    return (
        <div>


            {games.map((el) => {
                // debugger
                if (selGame == el.name) {
                    // debugger
                    return <div key={el.id} className="gameBox">

                        <div className="imgBox">

                            <img src={el.img[0]} />

                        </div>

                        <div className="about">

                            <h2>{el.name}</h2>
                            <span>{el.price}</span>
                            <p>{el.about}</p>


                            <ul>
                                {el.tags.map((tag) => {
                                    return <NavLink to="/searchGames" key={tag}
                                        onClick={() => dispatch(chooseTagAC(tag))}
                                    >

                                        <li key={tag}>  {tag}   </li>

                                    </NavLink>
                                })}

                            </ul>


                        </div>

                        {
                            el.liked == true ? <button onClick={() => dispatch(likeGameAC(selGame))}
                                className="like"
                            >	&#128150;</button> :

                                <button onClick={() => dispatch(likeGameAC(selGame))}
                                    className="like"
                                >	&#128148;</button>

                        }





                    </div>
                }
            })}


        </div>
    );
};


export default Game;