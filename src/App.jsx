import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import MainPage from './Main Page/MainPage';
import Navbar from './NavBar/Navbar';
import Overview from './OverviewPage/Overview';
import SkillsPage from './Skills&Experience/SkillsPage';

function App() {
  return (
    <div className="App" data-theme="pastel">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
