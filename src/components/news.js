import React from "react";
import axios from "axios";
import NumberList from "./number_list";
import "../style/news.css";
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // eslint-disable-next-line
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=00a3462d266d46af9a6f2050b45ff2fd"
      )
      .then(response => {
        const data = response.data.articles.slice(0, 5);
        this.setState({
          data,
          filtered: data
        });
      });
    this.setState({
      filtered: this.state.data
    });
  }
  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.data;
      newList = currentList.filter(item => {
        const lc = item.content.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.data;
    }
    this.setState({
      filtered: newList
    });
  }
  render() {
    if (this.state.data.length !== 0) {
      return (
        <div className="news_list">
          <div className="container_input">
            <input
              type="text"
              className="input"
              onChange={this.handleChange}
              placeholder="Search..."
            />
          </div>
          <div className="news_container">
            <NumberList filtered={this.state.filtered} />
          </div>
        </div>
      );
    }
    return (
      <div className="news_list">
        <div className="news_container">
          <p>Загрузка...</p>
        </div>
      </div>
    );
  }
}
export default News;
