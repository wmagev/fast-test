import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from "./components/Layout"
import Search from "./containers/Search"

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
      </Router>
    </Layout>
  );
}

export default App;
