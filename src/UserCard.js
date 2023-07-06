import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './test1.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
const UserCard = ({ user }) => {
    
    return (
        <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>abc</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  };
export default UserCard;