import React from "react";
import "../style/clock.css";
function FormattedDate(props){
    return (
    <div>
     <h3 className="date">{(new Date()).toDateString()}</h3>
    <h3 className="clock">{props.date.toLocaleTimeString()}</h3>
    </div>
);
}
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <FormattedDate date={this.state.date}/>
        );
    }
}
export default Clock;