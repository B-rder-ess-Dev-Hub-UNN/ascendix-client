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
import Library from './pages/library/Index';
import LibraryList from './pages/library/List';
import CourseOutline from './pages/library/Outline';
import Quests from './pages/quests/Index';
import QuestDetail from './pages/quests/Detail';
import CoursesList from './pages/courses/Index';
import CourseDetail from './pages/courses/Detail';
import OngoingCourses from './pages/courses/Ongoing';
import CourseNav from './pages/courses/Nav';
import CourseModule from './pages/courses/Module';
import LeaderBoard from "./pages/LeaderBoard";
import Certification from "./pages/courses/Certification";
import Assessment from "./pages/courses/Grade";


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
          <Route path="/library" element={<Library />} />
          <Route path='/librarylist/:id' element={<LibraryList />} />
          <Route path="/library/:id" element={<CourseOutline  />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/quests/:id" element={<QuestDetail />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/ongoing" element={<OngoingCourses />} />
          <Route path="/courses/:id/nav" element={<CourseNav />} />
          <Route path="/email" element={<EmailVerified />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/courses/module" element={<CourseModule />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/courses/grade" element={<Assessment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
