import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gitDataScience" render={() => (window.location = "https://github.com/ShobyP/Portfolio")} />
        <Route exact path="/gitEnterpriseApp" render={() => (window.location = "https://github.com/ShobyP/EnterpriseServicesApp")} />
        <Route exact path="/gitProjectManagementTool" render={() => (window.location = "https://github.com/ShobyP/ProjectManagementTool")} />
        <Route exact path="/gitTestingWithReact" render={() => (window.location = "https://github.com/ShobyP/testing_with_react")} />
        <Route exact path="/gitOtherRepositories" render={() => (window.location = "https://github.com/ShobyP?tab=repositories")} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
