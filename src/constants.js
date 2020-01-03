const APIUrl = " https://the-cocktail-db.p.rapidapi.com/";
const listAction = "list.php?c=list";
const filterAction = "filter.php?";
const detailAction = "lookup.php?i=";




export const getCategories = () => { 
    return fetch(`${APIUrl}${listAction}`,{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "4290b2737amsh85d75aca88230cap16c4bdjsn44f31a718fc0"
	}
    })
        .then(response => response.json())
}

export const getDrinks = (tag,filter) => { 
    return fetch(`${APIUrl}${filterAction}${tag}=${filter}`,{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "4290b2737amsh85d75aca88230cap16c4bdjsn44f31a718fc0"
	}
    })
        .then(response => response.json())
}

export const getDetails = (id) => { 
    return fetch(`${APIUrl}${detailAction}${id}`,{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "4290b2737amsh85d75aca88230cap16c4bdjsn44f31a718fc0"
	}
    })
        .then(response => response.json())
}



export const alcoholicFilters = [
    "Alcoholic",
    "Non Alcoholic",
    "Optional Alcohol"

]

    



