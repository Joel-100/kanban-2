import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './pages/Rockets';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
