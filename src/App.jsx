import { Routes, Route } from 'react-router-dom'
import SecondaryLayout from "./layouts/SecondaryLayout";
import './index.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import EmailVerified from './pages/EmailVerified';
import PrimaryLayout from './layouts/PrimaryLayout';
import Profile from './pages/Profile';
import SettingPage from './pages/SettingPage';
import HelpCenter from './pages/HelpCenter';
import HomePage from './pages/HomePage';
import CourseOutline from './pages/CourseOutline';
import LeaderBoard from "./pages/LeaderBoard";
import Certification from "./pages/Certification";
import Assessment from "./pages/Assessment";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<SecondaryLayout />}>
          {/* Define other routes here that will use the SecondaryLayout */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes as needed */}
        </Route>

        <Route element={<PrimaryLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/email" element={<EmailVerified />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/course-outline" element={<CourseOutline />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
