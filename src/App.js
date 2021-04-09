import './App.css';
import Login from './Component/Login/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Component/Header/Header';
import Feed from './Component/Feed/Feed';
import Profile from './Component/Profile/Profile';
import Signup from './Component/SignUp/Signup';

function App() {
  return (
    <div className="App">  
      <Router>
       <Route path="/signup" exact>
         <Signup />
       </Route>
       <Route path="/login" exact>
         <Login />
       </Route>
       <Route path="/" exact>
         <Feed />
       </Route>
       <Route path="/Profile" exact>
         <Profile />
       </Route>
      </Router>
    </div>
  );
}

export default App;
