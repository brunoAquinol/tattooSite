import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import store from "../store";
import Index from '../pages/Home';
import About from "../containers/about";

function AppRouter(){
    return(

        <BrowserRouter>
            <Route path="/" exact component={Index} />

            <Route path="/about" exact component={About} />
        </BrowserRouter>
        
    );
}

export default AppRouter;