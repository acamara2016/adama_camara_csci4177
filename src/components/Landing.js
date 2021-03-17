import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { useState } from "react";
import { MDBBadge, MDBContainer } from "mdbreact";
import Movie from "../Movie";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Landing extends React.Component{
  constructor() {
    super();
    this.state ={
      action: '',
      query: '',
    }
  }
  handleInput = event => {
    this.setState({ query: event.target.value });

  };

  
  render(){
    return (
      <MDBContainer>

        <div class="d-flex justify-content-center">
        <MDBDropdown>
        <MDBDropdownToggle caret color="white">
          Search By
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={()=> this.setState({action:'show_id'})}>ID</MDBDropdownItem>
          <MDBDropdownItem onClick={()=> this.setState({action:'title_like'})}>Title</MDBDropdownItem>
          <MDBDropdownItem onClick={()=> this.setState({action:'Country'})}>Country</MDBDropdownItem>
          <MDBDropdownItem onClick={()=> this.setState({action:'Release year'})}>Release year</MDBDropdownItem>
          <MDBDropdownItem divider />
      
        </MDBDropdownMenu>
        <div class="container-fluid">
    </div>
      </MDBDropdown>
      
      </div>
      <form style={{ margin:10 }} class="d-flex input-group w-auto">
        <input
          type="search"
          onChange={this.handleInput}
          class="form-control"
          id="query_data"
          placeholder="Search here"
          aria-label="Search"
          style={{ height:45.38 }}
  
        />
        <button
          class="btn btn-outline-primary"
          type="button"
          data-mdb-ripple-color="dark"
          style={{margin: 0}}
          onClick={console.log(this.state.query)}
        >
          Search
        </button>
      </form>
      <Movie id={this.state.action} q={this.state.query}/>
      </MDBContainer>
    
    
    
    );
  }
  } 


export default Landing;