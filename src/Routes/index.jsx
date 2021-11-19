import { Switch, Route } from "react-router-dom";
import LandingPage from './../Pages/LandingPage';
import Login from './../Pages/Login';
import SignUp from './../Pages/SignUp';
import Dashboard from './../Pages/Dashboard';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
