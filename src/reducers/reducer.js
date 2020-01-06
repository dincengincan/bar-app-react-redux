import {stringContains} from "../helpers"
import {SET_FILTER, SET_SEARCH_VALUE, SET_DRINKS, LOADING, FILTER_BY_SEARCH
,INCREMENT_PAGENUMBER, DECREMENT_PAGENUMBER, } from "../actions/actions"


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
                activeFilter: action.activeFilter,
                searchValue: ""
            }

        case SET_SEARCH_VALUE:
            return {
                    ...state, 
                    searchValue: action.searchValue,
                    
            }
        

        case SET_DRINKS:
            return {
                    ...state, 
                    drinks: action.drinks, 
                    _drinks: action.drinks,
                    loading: false,
                    //when category is changed, turn back to first page and set searchValue to none
                    pageNumber: 1,
                    
                    
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
                drinks: newDrinks,
                // while searching in other pages rather than first one, update pageNumber to see the items also, to overcome slice problem.
                pageNumber: 1  
            }
        case INCREMENT_PAGENUMBER:
            window.scrollTo({top: 0, left:0, behavior:'smooth'})
            return {
                ...state,
                pageNumber: state.pageNumber+1
            }
        case DECREMENT_PAGENUMBER:  
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            return {
                ...state,
                pageNumber: state.pageNumber-1
            }

            
        

        default:
            return state;
    }
}

export default rootReducer;