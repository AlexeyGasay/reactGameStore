import React from 'react';
import { useState } from 'react'



const Library = props => {

    const [selectedGame, setSelectedGame] = useState(null)

    

    return (
        <div>

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

                                            
                        {
                            el.liked == true ? <button onClick={() => props.likeGame(el.name)}
                                className="like"
                            >	&#128150;</button> :

                                <button onClick={() => props.likeGame(el.name)}
                                    className="like"
                                >	&#128148;</button>

                        }


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