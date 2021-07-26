import React from 'react';
import LoginPage from './components/loginPage/loginPage.js';
import Trips from './components/trips/trips.js';
export default function App() {
  return (
    <div>
      <h1>Railway timetable</h1>
      <p>This application shows railway timetable</p>
      <LoginPage />
      <Trips from="T1" to="T2" time="11:00"/>
    </div>
  );
}
