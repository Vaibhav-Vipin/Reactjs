import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    //   create state
    this.state = {
      planet: "earth",
    };
    console.log("Hey, I am from Constructor");
  }

  componentDidMount() {
    console.log("Hey I am from componentDidMount");
  }

  render() {
    console.log("Hey, I am from Render");
    //   Logic and shows VIEW of webpage.
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}
export default User;
//state
