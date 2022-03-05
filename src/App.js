import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import GenerateBuddyComponent from './components/GenerateBuddyComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact element = {<GenerateBuddyComponent/>}></Route>
                          <Route path = "/gen-buddy" element = {<GenerateBuddyComponent/>}></Route>
                          <Route path = "/users" element = {<ListUserComponent/>}></Route>
                          <Route path = "/add-user/:id" element = {<CreateUserComponent/>}></Route>
                          <Route path = "/view-user/:id" element = {<ViewUserComponent/>}></Route>
                          {/* <Route path = "/update-user/:id" element = {UpdateUserComponent}></Route> */}
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;