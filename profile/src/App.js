
import './App.css';
import React from 'react';
//import {Navbar,Container,Row,Col} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


const App = () =>(
  <>
  <h1>My profile</h1>
  <ProfilePhoto/>
  <FullName/>
  <Address/>
  </>
);
export default App;