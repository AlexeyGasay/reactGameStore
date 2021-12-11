
const LIKE_GAMES = "LIKE_GAMES";

import img0 from "../img/img0.png"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.jpg"
import img5 from "../img/img5.jpg"
import img6 from "../img/img6.jpg"
import img7 from "../img/img7.jpg"

let initialState = {
    Games: [

    {
        id: 0,
        price: 200,
        name: "CS-GO",
        tags: ["шутер", "от первого лица", "онлайн",],
        img: [ img0, img1, img2, ],
        category: "topSell",
        liked: false,
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere illum sequi accusamus distinctio numquam atquemagnam provident sapiente tempora! Explicabo omnis quidem ad exercitationem, sunt doloribus quisquam saepe molestiasrepellat!"
    },

    {
        id: 1,
        price: 450,
        name: "The Long Dark",
        tags: ["выживание", "от первого лица", "приключение",],
        img: [ img3 ],
        category: "topSell",
        liked: true,
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere illum sequi accusamus distinctio numquam atquemagnam provident sapiente tempora! Explicabo omnis quidem ad exercitationem, sunt doloribus quisquam saepe molestiasrepellat!"
    },

    {
        id: 2,
        price: 400,
        name: "Evropa Universalis IV",
        tags: ["стратегия", "тактика", "экнономика", "онлайн"],
        img: [ img6 ],
        category: "discounts",
        liked: false,
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere illum sequi accusamus distinctio numquam atquemagnam provident sapiente tempora! Explicabo omnis quidem ad exercitationem, sunt doloribus quisquam saepe molestiasrepellat!"
    },

    {
        id: 3,
        price: 2000,
        name: "Sekiro Shadow Die Twice",
        tags: ["файтинг", "от третьего лица", "история",],
        img: [ img7 ],
        category: "discounts",
        liked: true,
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere illum sequi accusamus distinctio numquam atquemagnam provident sapiente tempora! Explicabo omnis quidem ad exercitationem, sunt doloribus quisquam saepe molestiasrepellat!"
    },

    {
        id: 4,
        price: 0,
        name: "Genshin Impact",
        tags: ["приключение", "от третьего лица", "онлайн",],
        img: [ img5 ],
        category: "new",
        liked: false,
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere illum sequi accusamus distinctio numquam atquemagnam provident sapiente tempora! Explicabo omnis quidem ad exercitationem, sunt doloribus quisquam saepe molestiasrepellat!"
    },

    {
        id: 5,
        price: 2300,
        name: "Total War: Warhammer II",
        tags: ["стратегия", "магия", "экнономика", "тактика",],
        img: [ img4 ],
        category: "new",
        liked: false,
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere illum sequi accusamus distinctio numquam atquemagnam provident sapiente tempora! Explicabo omnis quidem ad exercitationem, sunt doloribus quisquam saepe molestiasrepellat!"
    }

]


};

export default function shopReducer(state = initialState, action) {
    switch(action.type) {
        case LIKE_GAMES: {
            let changedState = [...state.Games].map((el) => {
                if(el.name == action.payload) {
                    return {
                        ...el,
                        liked: !el.liked
                    }
                }

                return el
            });;
            

            return {
                ...state,
                Games: [...changedState]
            }
        }


        default: 
            return state
    }
}




export const likeGameAC = game => {
    return {
        type: LIKE_GAMES,
        payload: game
    }
}
