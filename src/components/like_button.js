import React from "react";
class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      updated: false
    };
  }
  updateLikes = () => {
    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }
  }
  render(){
    const label = this.state.updated ? 'Unlike' : 'Like'
    return(
      <div className="like_container">
        <p>{this.state.likes}</p>
        <button className="btn_primary" onClick={this.updateLikes}>{label}</button>
      </div>
    );
  }
}
export default LikeButton;