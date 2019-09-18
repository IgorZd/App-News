import React from "react";
import Clock from "./components/clock";
import News from "./components/news";
import Footer from "./components/footer";
import "./style/header.css";
// eslint-disable-next-line
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="header_conainer">
          <h1>News App</h1>
          <Clock />
        </div>
        <div className="article_container">
          <News />
        </div>
        <Footer/>
      </div>
    );
  }
}
export default App;

