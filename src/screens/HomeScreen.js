import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';

import {
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import BaseScreen from '../screens/DashboardScreen'
import LoginScreenbs from '../screens/LoginScreenbs'


const HomeScreen = (props) =>{

  if(localStorage.getItem('token') != null) {
    if(localStorage.getItem('token') != "null") {
      return (
        <BaseScreen></BaseScreen>
      );
    } else {
      return (
        <LoginScreenbs></LoginScreenbs>
      );
    }
  } else {
    return (
      <LoginScreenbs></LoginScreenbs>
    );
  }

}

export default HomeScreen;
