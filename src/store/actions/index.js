import {
    GET_ARTICLES
} from "../constants";
import axios from "axios";
export const getArticles = () => (
    dispatch => {
        return axios
            .get(
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=00a3462d266d46af9a6f2050b45ff2fd"
            )
            .then(response => {
                const data = response.data.articles.slice(0, 5);
                dispatch({
                    type: GET_ARTICLES,
                    payload: data
                });
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            });
    }
);