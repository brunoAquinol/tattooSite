import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
//import Navbar from '../components/Nav/Navbar'
import store from "../store";
import Index from '../pages/App';
import About from "../containers/about";

function AppRouter(){
    return(
        <Provider store={store}>
            <Router>
                <Route path="/" exact component={Index} />
                <Route path="/sobre" exact component={About} />
            </Router>
        </Provider>
    );
}

export default AppRouter;