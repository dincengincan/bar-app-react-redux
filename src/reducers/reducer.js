import {stringContains} from "../helpers"
import {SET_FILTER, SET_SEARCH_VALUE, SET_DRINKS, LOADING, FILTER_BY_SEARCH
,INCREMENT_PAGENUMBER, DECREMENT_PAGENUMBER} from "../actions/actions"


const rootReducer = function (state ={

    activeFilter: "Alcoholic",
    activeTag: "a",
    searchValue: "",
    
    drinks: [],
    _drinks: [],
    loading: false,

    index: 12,
    pageNumber: 1

}, action) {
    switch (action.type) {

        case SET_FILTER:
            return {
                ...state, 
                activeTag: action.activeTag, 
                activeFilter: action.activeFilter
            }

        case SET_SEARCH_VALUE:
            return {
                    ...state, 
                    searchValue: action.searchValue  
            }

        case SET_DRINKS:
            return {
                    ...state, 
                    drinks: action.drinks, 
                    _drinks: action.drinks,
                    loading: false 
            }
        
        case LOADING:
            return {
                ...state,
                loading: true
            }
        
        case FILTER_BY_SEARCH:
            const newDrinks = state._drinks.filter(drink => {
                        return stringContains(drink.strDrink, state.searchValue)
                    })
            return {
                ...state,
                drinks: newDrinks
            }
        case INCREMENT_PAGENUMBER:
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            return {
                ...state,
                pageNumber: state.pageNumber+1
            }
        case DECREMENT_PAGENUMBER:
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            return {
                ...state,
                pageNumber: state.pageNumber-1
            }

            
        

        default:
            return state;
    }
}

export default rootReducer;