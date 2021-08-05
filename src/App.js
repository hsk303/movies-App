
import Category from "./Category"; 
import React from "react";
import Searching from "./Searching";
import Table from "./Table"
class App extends React.Component {
  state={
    noOfMovies:0,
    searchString:"",
    currGenre:"All Genre",
  }

  recieveMovieData=(number)=>{
      this.setState({noOfMovies:number});
  };
  
  recieveSearchParam= (param)=>{
    this.setState({searchString:param});
  }

  recieveCurrGenre=(genre)=>{
    this.setState({currGenre:genre});
  }
  render(){
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2 p-4" >
        <Category recieveCurrGenre={this.recieveCurrGenre}/>
        </div>
       
          <div className="col-10 ">
            <div className="row">
              <div className="col-4 p-4">
              <Searching noOfMovies={this.state.noOfMovies} recieveSearchParam={this.recieveSearchParam}/>
            </div>
            <div className="row">
              <div className="col-8">
                <Table sendData={this.recieveMovieData} searchString={this.state.searchString} currGenre={this.state.currGenre}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  }
}

export default App;
