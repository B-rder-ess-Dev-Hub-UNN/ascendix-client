import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';

import SecondaryLayout from "./layouts/SecondaryLayout";
import PrimaryLayout from "./layouts/PrimaryLayout";
import AdminLayout from "./layouts/AdminLayout";

import './index.css'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import EmailVerified from './pages/EmailVerified';
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
import Survey from './pages/Survey';
import Task from './pages/Task';

// admin 
import User from './pages/admin/User';
import Token from './pages/admin/Token';
import Quest from './pages/admin/Quest';


const App = () => {
  return (
    <>
      <ScrollToTop />
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
          <Route path="/librarylist/:id" element={<LibraryList />} />
          <Route path="/library/:id" element={<CourseOutline />} />
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
          <Route path="/survey" element={<Survey />} />
          <Route path="/task" element={<Task />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/token" element={<Token />} />
          <Route path="/admin/quest" element={<Quest />} />
        </Route>
      </Routes>
    </>
  );
}
export default App
