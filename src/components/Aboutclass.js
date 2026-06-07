import React from "react";
import AboutClassChild from "./About"
import AboutTestClassChild from "./AboutTest";

class AboutClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2:2
        }
console.log("Parent constructor");
    }
    counter = () => {
        this.setState({
            count: this.state.count + 1,
            userInfo:{}
        })
    }
    fetchData = async() => {
            const res = await fetch('https://dummyjson.com/users/1');
            const data = await res.json();
            console.log(data);
            this.setState({userInfo:data})

    }
    
    componentDidMount(){
        console.log("Parent componentDidMount");
        this.fetchData();
    }
    componentWillUnmount(){
        console.log("Parent componentWillUnmount");
    }
    render(){
    console.log("Parent render");
    const {name, age} = this.props;
    const {count,count2} = this.state;
    const {id,firstName, lastName, maidenName, gender, email, phone, username, password, birthDate, image, bloodGroup, height, weight, eyeColor} = this.state.userInfo || {};
        return (
            <div>
                <h1>count:{count}</h1>
                <h1>count2:{count2}</h1>
                <button onClick={this.counter}>increase count</button>
                <h1>About class</h1>
                <h2>This is Namaste React Web Series</h2>
                <p>Name: {name}, Age: {age}</p>
                <AboutClassChild name={"shridhar"} age={"35"} />
                <AboutTestClassChild name={"Lithanya"} age={"3"} />
                <AboutClassChild name={"Jayapratha"} age={"28"} />
                <div className="res-container">
                    <div className="product-card">
                        <h1>User Info</h1>
                    <p>Id: {id}</p>
                    <p>Name: {firstName} {lastName}</p>
                    <p>Maiden Name: {maidenName}</p>
                    <p>Gender: {gender}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>   
                    </div>
                </div>
            </div>
        )
    }
}


export default AboutClass;