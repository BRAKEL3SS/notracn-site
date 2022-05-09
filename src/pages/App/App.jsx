import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../Auth/AuthPage';
import TeamPage from '../Team/TeamPage';
import MediaPage from '../Media/MediaPage';
import ContactPage from '../Contact/ContactPage';
import Navbar from '../../components/Navbar/Navbar';
import './App.css';
import ReportPage from '../Reports/ReportsPage';

export default function App() {
  const [user, setUser] = useState({name: 'admin'})
  return (
    <main className='App'>
      <>
        <Navbar user={ user } setUser={setUser} />
      <Routes>
        <Route path="/team" element={<TeamPage prop="prop"/>}/>
        <Route path="/media" element={<MediaPage token={process.env.INSTA_TOKEN} limit={12} />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/add-rider" element={<AuthPage />} />
        <Route path="/reports" element={<ReportPage />} />
      </Routes>
      </>

    </main>
  );
}

