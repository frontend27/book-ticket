import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './component/register';
import { Login } from './component/login';
import { Dashboard } from './component/dashboard';
import { AuthGuards } from './shared/authGuards';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path='/dashboard' element={
            <AuthGuards>
              <Dashboard />
            </AuthGuards>
            } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
