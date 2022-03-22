import { createBrowserHistory } from "history";
import Card from "pages/Card";
import Table from "pages/Table";
import { Route, Router, Switch } from "react-router-dom";
import DashboardAdmin from "./pages/DashboardAdmin";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <>
      <div id="wrapper">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={DashboardAdmin} />
            <Route path="/table" component={Table} />
            <Route path="/components/card" component={Card} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
