import React, { Component } from "react";

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    const jsonData = {
      name: "Devesh",
      age: 20,
      occupation: "Student",
    };
    this.state = {
      jsonData: jsonData,
    };
  }

  render() {
    const { name, age, occupation } = this.state.jsonData;
    return (
      <div>
        <h1>Hello {name} </h1>
        <p>
          You are {age} years old and work as a {occupation}
        </p>
      </div>
    );
  }
}
