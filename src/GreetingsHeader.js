import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
const GreetingsHeader = (props) => {
  return (
    <div className="greetings-header">
      <h2 style={{ fontSize: "1.5rem" }}>hi, I'm Maksim Chugunov<br />and I made some games</h2>
    </div>
  );
}

export default GreetingsHeader;