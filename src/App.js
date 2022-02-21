
import './App.css';
import Topbar from './Topbar/Topbar';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/write/Write';
import Settings from './Pages/setting/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function App() {
  
  
  
  const user=false; 
  return (
    <Router>
      <Topbar/>
   
     <Routes>
          <Route exact path="/"  element={<Home />} />
         <Route exact path="/register" element={user ? <Home/> : <Register/> } />
         <Route exact path="/login" element={user ? <Home/> : <Login/> } />
         <Route exact path="/write" element={user ? <Write/> : <Register/> } />
         <Route exact path="/settings" element={user ? <Settings/> :< Register/> } />
         <Route exact path="/post/:postid" element={<Single/> } />
     </Routes>
    </Router>
  );
}

export default App;
