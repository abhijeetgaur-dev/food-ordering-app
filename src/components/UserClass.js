import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 2
        }
    }
    render(){
        const {name , location} = this.props;
        const {count, count2} = this.state;
         return(

            <div className= "user-card">
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
                <h2>Count : {count}</h2>
                <button onClick = {() => {
                    this.setState({
                        count : count +1,
                        count2 : count2 +1
                    })
                }}
                >Update Count</button>
                <h2>Count : {count2}</h2>
                <h2>Contact : Dagestan</h2>
            </div>
        )
    }
}

export default UserClass;