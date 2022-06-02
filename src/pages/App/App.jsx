import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../Auth/AuthPage';
import TeamPage from '../Team/TeamPage';
import MediaPage from '../Media/MediaPage';
import ContactPage from '../Contact/ContactPage';
import AboutPage from '../About/AboutPage';
import ReportPage from '../Reports/ReportsPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";


export default function App() {
  const [user, setUser] = useState(getUser())
  const key = process.env.REACT_APP_INSTA_TOKEN
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <main className='App'>
      <>
        <Header user={ user } setUser={setUser} />
        <img style={{height:200, marginTop:50, width: '100vw', objectFit:'cover', paddingBottom:0, marginBottom:-5}} src="https://i.imgur.com/NBq93jh.jpg" alt="team pic header" />
      <Routes>
          <Route exact path='/'
            element={<Navigate to="/about" replace />}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage prop="prop"/>}/>
          <Route path="/media" element={<MediaPage token={key} limit={12} />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/add-rider" element={<AuthPage />} />
          <Route path="/reports" element={<ReportPage user={ user } />} />
      </Routes>
      <Footer />
      </>

    </main>
    </ThemeProvider>
  );
}

