import React from 'react';
import {DrinkList, Filters, FiltersAlcoholic, Search} from "../components";



const HomePage = () => {
        return(
             <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Search />
                            <FiltersAlcoholic />
                            <Filters />
                        </div>
                        <div className="col-lg-4">
                            <DrinkList />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }


export default HomePage;

