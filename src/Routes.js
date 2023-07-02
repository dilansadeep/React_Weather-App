import { BrowserRouter as Router, Routes as BaseRoutes, Route } from "react-router-dom";
import { Home, City } from "../src/pages";

const Routes = () => (
  <Router>
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:cityCode" element={<City />} />
    </BaseRoutes>
  </Router>
);

export default Routes;
