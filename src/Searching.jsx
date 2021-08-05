import React from "react";

function Searching (props){
        return(
            <div>
                <p>Showing {props.noOfMovies} movies from Database</p>
                <button type="button" class="btn btn-primary btn-sm">New</button>
                <div class="input-group mb-3 mt-3 input-group-sm">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"
  onChange={(e)=>{
      props.recieveSearchParam(e.currentTarget.value);
  }}/>
</div>
            </div>
        );
    
}
export default Searching;

