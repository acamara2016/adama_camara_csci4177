import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { useState } from "react";
import { MDBBadge, MDBContainer } from "mdbreact";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import queryString from 'query-string';
import axios from 'axios';

class MovieDetails extends React.Component{
  state = {
    movie: []
  }
  // this.setState({id: queryString.parse(this.props.location.search).id})
  componentDidMount(){
    axios.get('https://api-tutorial4.herokuapp.com/movies?show_id='+queryString.parse(this.props.location.search).id)
    .then(res => {
        const movie = res.data;
        console.log(movie)
        this.setState({movie});
    })
}

  render(){

    return(
      <MDBContainer>
          {this.state.movie.map(
              movie => 
              <div class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#!">
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{ movie.title}</h5>
                                    <p>{movie.show_id}</p>
                                    <p>{movie.type}</p>
                                    <p>{movie.director}</p>
                                    <p>{movie.country}</p>
                                    <p>{movie.date_added}</p>
                                    <p>{movie.release_year}</p>
                                    <p>{movie.rating}</p>
                                    <p>{movie.duration}</p>
                                    <p>{movie.listed_in}</p>
                                    <p>{movie.description}</p>
                                    <a href={"/checkout?id="+movie.show_id} class="btn btn-primary">Book ticket</a>
                                    <a href={"/"} class="btn btn-secondary">Return</a>
                                </div>
                            </div>
              
          )}
          <br/>
      </MDBContainer>
  )
  }
}


export default MovieDetails;