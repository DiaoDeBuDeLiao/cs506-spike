import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/layout/nav';
import Dash from './components/dashboard/dash'
import ProjDetails from './components/project/projectDetails'
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import CreateHive from './components/project/CreateHive';
import CreateHouse from './components/project/CreateHouse';

class App extends Component{

render() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path = "/" component = {Dash} />
          <Route path = "/project/:id" component = {ProjDetails} />
          <Route path = "/signIn" component = {SignIn} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/createhive" component = {CreateHive} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

}
export default App;
