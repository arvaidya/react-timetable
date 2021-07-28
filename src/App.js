import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage.js';
import Trips from './components/trips/trips.js';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
export default function App() {
  return (
      <Container>
          <Row><Col><h1>Railway timetable</h1></Col></Row>
          <Row><Col><p>This application shows railway timetable</p></Col></Row>
          <BrowserRouter>
              <Switch>

                  <Route path="/login">
                      <LoginPage />
                  </Route>
                  <Route path="/trips">
                      <Trips />
                  </Route>
              </Switch>
          </BrowserRouter>
      </Container>
  );
}
