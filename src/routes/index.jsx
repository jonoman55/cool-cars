// TODO: Update BrowserRouter to HashRouter before Netlify deployment

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';

import { Layout } from '../components';
import HomePage from '../pages/HomePage';
import DesignPage from '../pages/DesignPage';
import SpecsPage from '../pages/SpecsPage';
import ProtoTypePage from '../pages/ProtoTypePage';
import LookAndFeelPage from '../pages/LookAndFeelPage';
import NotFoundPage from '../pages/NotFoundPage';

/**
 * Routes
 */
const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/specs" element={<SpecsPage />} />
        <Route path="/proto" element={<ProtoTypePage />} />
        <Route path="/lookfeel" element={<LookAndFeelPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
