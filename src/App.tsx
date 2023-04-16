import { BrowserRouter as Router } from "react-router-dom";

import Layout from "lib/layout";
import { Routings } from "lib/router/Routings";

import Header from "./lib/layout/Header";

const App = () => (
  <Router>
    <Header />
    <Layout>
      <Routings />
    </Layout>
  </Router>
);

export default App;
