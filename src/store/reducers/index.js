import {
    GET_ARTICLES
} from "../constants";
const initialState = {
    articles: []
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            const articles = action.payload;
            return { ...state, articles };
        default: {
            return state
        };
    }
}
export default rootReducer;