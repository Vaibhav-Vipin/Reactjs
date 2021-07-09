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
    this.setState({ planet: "jupiter" });
  }

  /*  static getDerivedStateFromProps(prop, state) {
    console.log("I'm from get derived state from props");
    return { planet: "Jupiter" };
  } */

  shouldComponentUpdate(nextProp, nextState) {
    console.log("from shouldComponentUpdate");
    console.log({
      nextProp,
      nextState,
    });
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevSate) {
    console.log("from getSnapshotBeforeUpdate");
    console.log({ prevProp, prevSate });
    return true;
  }

  componentDidUpdate() {
    console.log(this.state);
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
