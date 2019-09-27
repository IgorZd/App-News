import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import { getArticles } from "../../store/actions";
import ConnectedNews, { News } from "../News/news";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
describe('News', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<News />)
    })

    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});
describe("ConnectedNews", () => {
    const middlewares = [thunk];
    const initialState = { articles: [] };

    const mockStore = configureStore(middlewares);
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><ConnectedNews /></Provider>);
    });
    it("+++ render the connected(SMART) component", () => {
        expect(wrapper.find(ConnectedNews).length).toEqual(1)
    });
    it('+++ check action on dispatching ', () => {
        store = mockStore(initialState);
        return store.dispatch(getArticles())
            .then(() => {
                const action = store.getActions();
                expect(action[0].type).toBe("GET_ARTICLES");
            });
    });
})
