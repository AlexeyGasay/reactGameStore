import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {updateSearchTextAC} from '../../reducers/CommonReducer'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { chooseGameAC } from '../../reducers/CommonReducer';

const searchInput = () => {
    const [searchArr, setSearchArr] = useState([]);
    const searchText = useSelector(state => state.commonData.searchText)
    const state = useSelector(state => state.shopPage.Games);
    let copyArr = [...state];

    let width = document.body.clientWidth;

    


    useEffect(() => {
        setSearchArr([]);
        let arr = [];
        copyArr.map((game) => {
            if(game.name.toLowerCase().includes(searchText.toLowerCase()) & searchText != '') {
                if(width<= 1440 & arr.length < 3) {
                    arr.push(game.name)
                } else if (width>= 1440 & arr.length < 6) {
                    arr.push(game.name)
                }
            }
        })

        setSearchArr(arr);


        
    }, [searchText])



    const dispatch = useDispatch();



    const onSearchChange = e => {
        dispatch(updateSearchTextAC(e.target.value))
    }
    return (
        <div className="searchContainer">
            
            <div className="searchBox">

                <input type="text" value={searchText} onChange={onSearchChange}/>

            </div>

            <div className="prompt">
                <ul 
                style={
                    
                    searchArr.length > 0 ? {border: "1px solid rgb(32, 32, 32)"}: {}
                }

                

                >
                    {searchArr.map((el) => {
                        return <NavLink to="/game" key={el}
                            onClick={()=> dispatch(chooseGameAC(el))}
                        >

                            <li>{el}</li>

                        </NavLink>
                        
                    }
                    )}
                </ul>
            </div>

        </div>
    );
};



export default searchInput;