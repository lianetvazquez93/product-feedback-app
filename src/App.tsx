import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Suggestions from './pages/Suggestions';
import EditFeedback from './pages/EditFeedback';
import NewFeedback from './pages/NewFeedback';
import FeedbackDetail from './pages/FeedbackDetail';
import Roadmap from './pages/Roadmap';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="m-0 p-0 bg-gray-light">
        <Switch>
          <Route exact path="/" component={Suggestions} />
          <Route path="/new" component={NewFeedback} />
          <Route path="/edit" component={EditFeedback} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/details/:id" component={FeedbackDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
