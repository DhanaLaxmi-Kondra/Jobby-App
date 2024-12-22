import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import JobItemDetails from './components/JobItemDetails'
import JobsPage from './components/JobsPage'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={JobsPage} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
