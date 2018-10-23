import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header";
import Main from "./components/main";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Router V4 example</h1>
      <Header />
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

// <Router history={browserHistory}>
//   <Route path='/' component={Layout}>
//     <IndexRoute component={Home} />
//     <Route path='/todos' component={TodoContainer} />
//   </Route>
// </Router>
