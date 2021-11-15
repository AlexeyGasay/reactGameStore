import React from 'react';
import img0 from '../../img/img0.png'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import { useState, useEffect, } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { chooseGameAC } from '../../reducers/CommonReducer';


const Slider = props => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.sliderData.sliderGames);

    // debugger

    // Индекс текущего слайда
    const [activeIndex, setActiveIndex] = useState(0);

    let Lenght = state.length;

    // Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : state.length - 1
    // Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === state.length - 1 ? 0 : activeIndex + 1


    const changeActiveImg = (activ) => {
        setActiveIndex((current, active = activ) => {
            if (activ == "next") {
                let res = current + 1 >= state.length ? 0 : current + 1;
                return res
            }
            else if (active == "prev") {
                let res = current;
                if (current <= 0) {
                    res = Lenght - 1;
                }
                else res = res - 1;
                return res

            }
            else return 0
        })
    }







    return (



        <div className="sliderBox">

            <button className="sliderBtn sliderBtnPrev"

                onClick={() => changeActiveImg("prev")}>

                {"<"}
            </button>


            <div className="slider">

                <span className="bgPls"
                    style={
                        {
                            backgroundImage: `url(${state[activeIndex].img[0]})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',

                        }
                    }

                >
                    s

                </span>



                <div className="slider-img slider-img-prev" key={prevImgIndex}>

                    <div className="previewImgGame">

                        <img src={state[prevImgIndex].img[0]} />

                    </div>

                    <div className="aboutGame">
                        lorem impus
                    </div>

                </div>





                <div className="slider-img sliderImgActive" key={activeIndex}>



                    <div className="previewImgGame">

                    <NavLink to="/game" className="sliderLink"
                        onClick={() => dispatch(chooseGameAC(state[activeIndex].name))} key={state[activeIndex].name}>

                            <span></span>


                        <img src={state[activeIndex].img[0]} />
                    </NavLink>


                    </div>

                    <div className="aboutGame">

                        <h2>{state[activeIndex].name}</h2>

                        <p className="price">Цена: {state[activeIndex].price <= 0 ? "Free" : state[activeIndex].price}</p>
                        <p className="about">{state[activeIndex].about}</p>


                        <ul>
                            {state[activeIndex].tags.map((el) => {
                                // debugger
                                return <li key={el}>{el}</li>

                            })}
                        </ul>

                    </div>


                </div>








                <div className="slider-img slider-img-next" key={nextImgIndex}>

                    <div className="previewImgGame">

                        <img src={state[nextImgIndex].img[0]} />

                    </div>

                    <div className="aboutGame">
                        lorem impus
                    </div>

                </div>


            </div>


            <button className="sliderBtn sliderBtnNext"

                onClick={() => changeActiveImg("next")}>
                  {">"}

            </button>

        </div>
    );
};


export default Slider;