import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { chooseGameAC } from '../reducers/CommonReducer';
import { useDispatch } from 'react-redux';
import { chooseTagAC } from '../reducers/CommonReducer';

const ShopCategories = props => {
    
    const state = useSelector(state => state.shopPage.Games)

    const dispatch = useDispatch();

    const [category, setCategory] = useState('');

    console.log(category.length)

    return (
        <div>

            <nav className="shopNav">

                <ul>

                    <li>
                        <a href="#" onClick={() => setCategory('new')}
                            className={category == "new" ? "activeShop": ''}
                        >

                            Популярные новинки

                        </a>
                    </li>

                    <li>
                        <a href="#" onClick={() => setCategory('topSell')}
                            className={category == "topSell" ? "activeShop": ''}
                        >

                            Лидеры продаж

                        </a>
                    </li>



                    <li>
                        <a href="#" onClick={() => setCategory('discounts')}
                             className={category == "discounts" ? "activeShop": ''}
                        >

                            Скидки

                        </a>
                    </li>



                </ul>


            </nav>


            <div className="gamesCategories">

                <ul className="listOfGames">


                    {state.map((el) => {
                        if (el.category === category) {

                            return <NavLink to="/game"
                                onClick={()=> dispatch(chooseGameAC(el.name))} key={el.id}>

                                <li key={el.id}>


                                    <div>
                                        <img src={el.img[0]} />

                                    </div>

                                    <div className="shortInfo">
                                        {el.name}
                                        <ul className="tags">

                                            {el.tags.map((tag) =>  <li key={tag}>{tag}</li>)}

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


export default ShopCategories;