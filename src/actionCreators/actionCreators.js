import {getDrinks} from "../constants"
import {SET_FILTER, SET_SEARCH_VALUE, SET_DRINKS, LOADING, FILTER_BY_SEARCH, DECREMENT_PAGENUMBER, INCREMENT_PAGENUMBER  } from "../actions/actions";


export function setFilter(newTag, newFilter){
    return {type: SET_FILTER, activeTag: newTag, activeFilter: newFilter }
}


export function setSearchValue(newValue){
    return {type: SET_SEARCH_VALUE, searchValue: newValue }
}

export function setDrinks(newDrinks){
    return {type: SET_DRINKS, drinks: newDrinks }
}

export function fetchDrinks(){
    return (dispatch, getState) => {
        dispatch(loading()); //first loading value changes
        const state = getState();
        getDrinks(state.activeTag, state.activeFilter).then(data => dispatch(setDrinks(data.drinks))) 
        //after data is received, loading value changes back within setDrinks
    }
}

export function loading(){
    return {type: LOADING}
}

export function filterBySearch(){
    return {type: FILTER_BY_SEARCH}
}

export function incrementPageNumber(){
    return {type: INCREMENT_PAGENUMBER}
}

export function decrementPageNumber(){
    return {type: DECREMENT_PAGENUMBER}
}


