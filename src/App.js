import React from 'react';
import Clock from "./components/clock";
import LikeButton from "./components/like_button";
 // eslint-disable-next-line
const APIKey = "00a3462d266d46af9a6f2050b45ff2fd";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
    // this.getNews = this.getNews.bind(this);
  }
  componentDidMount(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=00a3462d266d46af9a6f2050b45ff2fd';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
  }
  render(){
    return(
      <div className="App">
       <div className="header_conainer">
         <h1 className="header_name">News App</h1>
         <Clock/>
       </div>
       <div className="article_container">
         <LikeButton/>
       </div>
      </div>
    );
  }
}
export default App;