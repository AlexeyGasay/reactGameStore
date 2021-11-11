import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './common/SearchInput';
import { useState } from 'react'

const Library = props => {
    // debugger

    const [selectedGame, setSelectedGame] = useState(null)

    

    return (
        <div>

            <SearchInput />


            <div className="library">

                <div className="gameList">
                    <ul>

                        {props.data.map((el) => {
                            if (el.liked) {
                                return <li key={el.id}>

                                    <a href="#" onClick={()=> setSelectedGame(el.id)}>

                                        {el.name}

                                    </a>
                                </li>
                            }
                        })}
                    </ul>
                </div>

                <div className="aboutGame">
                    {
                        props.data.map(
                            (el) => {
                                if(el.id === selectedGame) {
                                    return <div key={el.id}>

                                        <div className="libraryBannerOfGame">

                                            <img src={el.img[0]}/>

                                        </div>

                                        <div>

                                            <p>

                                                {el.name}

                                            </p>

                                            <p>

                                                {el.about}

                                            </p>


                                        </div>
                                    </div>
                                }
                            }
                        )
                    }
                </div>

            </div>

        </div>
    );
};



export default Library;