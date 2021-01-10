import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from "./components/Layout"
import SearchPage from "./containers/Search"
import ConfirmPage from "./containers/Confirm"

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route path="/confirm">
              <ConfirmPage />
            </Route>
          </Switch>
      </Router>
    </Layout>
  );
}

export default App;
