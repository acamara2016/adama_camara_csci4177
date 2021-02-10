import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { useState } from "react";
import { MDBBadge, MDBContainer } from "mdbreact";

const DropdownPage = () => {
  const [action, setAction]=useState("No action selected");
  return (
    <MDBContainer>
      <p>Demo site</p>
      <div class="d-flex justify-content-center">
      <MDBDropdown>
      <MDBDropdownToggle caret color="white">
        Chose an option
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem onClick={()=>setAction("Action 1")}>Action 1</MDBDropdownItem>
        <MDBDropdownItem onClick={()=>setAction("Action 2")}>Action 2</MDBDropdownItem>
        <MDBDropdownItem onClick={()=>setAction("Action 3")}>Action 3</MDBDropdownItem>
        <MDBDropdownItem divider />
    
      </MDBDropdownMenu>
      <MDBCol>
      <MDBCard style={{ width: "250px",height:"250px" }}>
        <MDBCardBody>
          <MDBCardTitle>Option chosen</MDBCardTitle>
          <MDBCardText>
          {action}
          </MDBCardText>
      
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBDropdown>
    </div>
    </MDBContainer>
  
  
  
  );
}

const CardExample = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default DropdownPage;