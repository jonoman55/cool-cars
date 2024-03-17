import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DesignPage from '../pages/DesignPage';
import SpecsPage from '../pages/SpecsPage';
import NotFoundPage from '../pages/NotFoundPage';
import { Layout } from '../components';

/**
 * App Routes
 */
const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="design" element={<DesignPage />} />
          <Route path="specs" element={<SpecsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
