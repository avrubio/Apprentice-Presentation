import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import MainPage from './Main Page/MainPage';
import Navbar from './NavBar/Navbar';
import SkillsPage from './Skills&Experience/SkillsPage';

function App() {
  return (
    <div className="App" data-theme="pastel">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
