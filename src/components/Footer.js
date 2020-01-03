import React from "react";

function Footer(props){
  return(
    <nav>
        <ul  className="pagination justify-content-between">
              
                {
                    props.pageNumber < 2
                    ? <button disabled className="btn btn-dark" >&laquo; Previous Page</button>
                    : <button className="btn btn-dark" onClick={() => props.decrementPageNumber()}>&laquo; Previous Page</button>
                }

                {
                    props.totalDrinks < (props.pageNumber * 12)
                    ? <button disabled className="btn btn-dark">Next Page &raquo;</button>
                    : <button className="btn btn-dark" onClick={() => props.incrementPageNumber() }>Next Page &raquo;</button>
                }
                

        </ul>
    </nav>
  )
}

export default Footer;


