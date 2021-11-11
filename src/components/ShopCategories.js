import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ShopCategories = props => {
    const state = useSelector(state => state.shopPage)

    const [category, setCategory] = useState('w');

    window.qwe = category;

    return (
        <div>

            <nav className="shopNav">

                <ul>

                    <li>
                        <a href="#" onClick={() => setCategory('new')}>

                            Популярные новинки

                        </a>
                    </li>

                    <li>
                        <a href="#" onClick={() => setCategory('topSell')}>

                            Лидеры продаж

                        </a>
                    </li>



                    <li>
                        <a href="#" onClick={() => setCategory('discounts')}>

                            Скидки

                        </a>
                    </li>



                </ul>


            </nav>


            <div className="gamesCategories">

                <ul className="listOfGames">


                    {state.map((el) => {
                        if (el.category === category) {

                            return <li key={el.id}>

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

                                    {el.price <= 0 ? "Free": el.price}

                                </div>

                            </li>
                        }






                    })}

                </ul>
            </div>





        </div>
    );
};


export default ShopCategories;