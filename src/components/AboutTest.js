import React from "react";
class AboutTestClassChild extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        count: 0,
        count2:2
      }
      console.log("Test child constructor");
  }
  componentDidMount(){
    console.log(this.props.name+"Test child componentDidMount");
  }
  render(){
    console.log("Test child render");
    const {name, age} = this.props;
    const {count, count2} = this.state;
    return (
    <div>
      <h1>count:{count}</h1>
      <h1>count2:{count2}</h1>
      <h1>About function</h1>
      <h2>This is Namaste React Web Series</h2>
      <p>Name: {name}, Age: {age}</p>
    </div>
  );
  }
}


export default AboutTestClassChild;