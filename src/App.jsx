import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import ContinuousLearning
  from './Continous Learning & Growth/ContinousLearning';
import MainPage from './Main Page/MainPage';
import Navbar from './NavBar/Navbar';
import Overview from './OverviewPage/Overview';
import SkillsPage from './Skills&Experience/SkillsPage';
import TalentSuccessQualities from './TalentSuccess/TalentSuccessQualities';

function App() {
  return (
    <div className="App" data-theme="pastel">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/overview" element={<Overview />} />
          <Route
            path="/talent-success-qualities"
            element={<TalentSuccessQualities />}
          />
          <Route path="/continuous-learning" element={<ContinuousLearning />} />
        </Routes>
      </BrowserRouter>
      <script
        src="https://kit.fontawesome.com/39600a69bb.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
