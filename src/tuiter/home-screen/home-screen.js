import TuitList from "../tuits-list/TuitList";
import WhatHappening from "../whats-happening";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import tuits from "../reducers/tuits-reducer";

const store = configureStore({
    reducer: { tuits }
});

function HomeScreen() {
    return (
        <Provider store={store}>
            <h4>Home</h4>
            <WhatHappening />
            <TuitList />
        </Provider>
    );
};
export default HomeScreen;