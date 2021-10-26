import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Suggestions from './pages/Suggestions';
import EditFeedback from './pages/EditFeedback';
import NewFeedback from './pages/NewFeedback';
import FeedbackDetail from './pages/FeedbackDetail';
import Roadmap from './pages/Roadmap';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="mr-5">
            Suggestions
          </Link>
          <Link to="/new" className="mr-5">
            New
          </Link>
          <Link to="/edit" className="mr-5">
            Edit
          </Link>
          <Link to="/detail" className="mr-5">
            Details
          </Link>
          <Link to="/roadmap" className="mr-5">
            Roadmap
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Suggestions} />
          <Route path="/new" component={NewFeedback} />
          <Route path="/edit" component={EditFeedback} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/detail" component={FeedbackDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
