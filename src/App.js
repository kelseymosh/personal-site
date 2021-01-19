import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index.js'
import Projects from './pages/projects.js'
import Resume from './pages/resume.js'
import Contact from './pages/contact.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
