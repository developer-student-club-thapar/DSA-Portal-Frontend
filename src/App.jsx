import {Fragment} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import Leaderboard from './Pages/Leaderboard/Leaderboard';
import Dashboard from './Pages/Dashboard/Dashboard';

function App () {
  return (
    <Fragment>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
