import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import SplitButton from 'react-bootstrap/SplitButton';

import "./animation.css";

const AnimationDash = () => {
  return (
    <div className="animationdash">
      <div className="animationDashTitle">Animation Dashboard</div>
      <AnimationUyilities />
      <Dropdown1 />
    </div>
  );
};

export default AnimationDash;

const AnimationUyilities = () => {
  return (
    <div className="animationutilities">
      <h1>Animation Utilities</h1>
      <p>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework
      </p>
    </div>
  );
};

const Dropdown1 = () => {
  return (
    <div className="dropdn">
      <div className="dropdownTitle">Grow In Animation Utilty</div>
      <div className="element1">.animated--grow-in</div>
      <div className="dropdownbtnbody">
        <div className="dropdownbtntitle">Navbar</div>
        
          <Dropdown className="dropdowndiv">
            <Dropdown.Toggle  variant="secondary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        
      </div>
      <p>
        Note: This utility animates the CSS opacity property, meaning it will
        override any existing opacity on an element being animated!
      </p>
    </div>
  );
};
