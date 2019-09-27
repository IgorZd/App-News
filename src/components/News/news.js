import React from "react";
import { connect } from "../../../node_modules/react-redux";
import { getArticles } from "../../store/actions";
import NumberList from "../Number_list/number_list";
import "../../style/news.scss";
export class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: ''
    };
  }
  componentDidMount() {
    if (this.props.getArticles) {
      this.props.getArticles();
    }
  }
  handleChange = e => {
    this.setState({ searchFilter: e.currentTarget.value });
  }
  render() {
    if (this.props.articles && this.props.articles.length !== 0) {
      return (
        <div className="news_list">
          <div className="container_input">
            <input
              type="text"
              className="input"
              onChange={this.handleChange}
              value={this.state.searchFilter}
              placeholder="Search..."
            />
          </div>
          <div className="news_container">
            <NumberList filtered={this.props.articles
              .filter(element => element.content ? element.content.toLowerCase()
                .search(this.state.searchFilter.toLowerCase()) !== -1 : true)} />
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
const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(getArticles())
  };
}
const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

