import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class App extends React.Component {
  render() {
    return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
  }
}

export default App;