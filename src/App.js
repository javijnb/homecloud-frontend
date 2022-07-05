// Libraries
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useEffect, useState } from 'react';

// Components
import Login from './components/Login';
import Toolbar from './components/Toolbar';
import Home from './components/Home';

export default function App() {

  const [isLoggedIn, setLoggedIn] = useState('false');
  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setLoggedIn('true');
      // Check if sessionToken is not null
      if (localStorage.getItem('sessionToken') !== null) {
        // get the sessionToken from local storage and setSessionToken with a not null value
        setSessionToken(localStorage.getItem('sessionToken') ?? '');
      }
    }
  }, [sessionToken])

  if (isLoggedIn === 'false'){
    return (
      <div className="container">
        <Router>
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }

  return (
    <div className="container">
      <Toolbar/>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login"/>} />
        </Routes>
      </Router>
    </div>
  );

}
