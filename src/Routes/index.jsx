import { Switch, Route } from "react-router-dom";
import LandingPage from './../Pages/LandingPage';
import Login from './../Pages/Login';
import SignUp from './../Pages/SignUp';
import Dashboard from './../Pages/Dashboard';
import {useState} from 'react';
import {useEffect} from 'react';
const Routes = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confPasswordShown, setConfPasswordShown] = useState(false);
  const [auth,setAuth] = useState(false);
  const togglePasswordVisiblity = (callback, element) => {
    callback(element ? false : true);
  };
  useEffect(()=>{
   const token =  JSON.parse(localStorage.getItem('@kenzieHub:token'));
    if(token){
      
      return setAuth(true);
    }
  },[auth])

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <LandingPage auth={auth}/>
        </Route>
        <Route path='/login'>
          <Login togglePasswordVisiblity={togglePasswordVisiblity} setPasswordShown={setPasswordShown} passwordShown={passwordShown} auth={auth} setAuth={setAuth}/>
        </Route>
        <Route path='/signup'>
          <SignUp togglePasswordVisiblity={togglePasswordVisiblity} setPasswordShown={setPasswordShown} passwordShown={passwordShown} confPasswordShown={confPasswordShown} setConfPasswordShown={setConfPasswordShown} auth={auth}/>
        </Route>
        <Route path='/dashboard' >
          <Dashboard auth={auth} setAuth={setAuth}/>
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
