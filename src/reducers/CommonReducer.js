const UPDATE_SEARCH_TEXT = "UPDATE_SEARCH_TEXT";
const CHANGE_SELECTED_GAME = "CHANGE_SELECTED_GAME";
const CHANGE_SELECTED_TAG = "CHANGE_SELECTED_TAG";



import img0 from "../img/img0.png"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.jpg"
import img5 from "../img/img5.jpg"
import img6 from "../img/img6.jpg"
import img7 from "../img/img7.jpg"


let initialState = {
    searchText: "test",
    selectedGame: null,
    selectedTag: null,

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

}


export default function CommonReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        case CHANGE_SELECTED_GAME:
            return {
                ...state,
                searchText: "",
                selectedGame: action.payload

            }

        case CHANGE_SELECTED_TAG:
            return {
                ...state,
                selectedTag: action.payload
            }


        default:
            return state
    }
}


export const updateSearchTextAC = text => {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: text
    }
}


export const chooseGameAC = game => {
    return {
        type: CHANGE_SELECTED_GAME,
        payload: game
    }
}


export const chooseTagAC = tag => {
    return {
        type: CHANGE_SELECTED_TAG,
        payload: tag
    }
}
