import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ForumHome from './components/Forum/ForumHome';
import Thread from './components/Forum/Thread';
import CreatePost from './components/Forum/CreatePost';
import Marketplace from './components/Marketplace/Marketplace';
import QuizHome from './components/Quiz/QuizHome';
import Results from './components/Quiz/Results';
import DriverStats from './components/DriverStats/DriverStats';
import TeamStats from './components/TeamStats/TeamStats';
import DriverStandings from './components/DriverStandings/DriverStandings';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<ForumHome />} />
            <Route path="/forum/thread/:id" element={<Thread />} />
            <Route path="/forum/create" element={<CreatePost />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/quiz" element={<QuizHome />} />
            <Route path="/quiz/results" element={<Results />} />
            <Route path="driverstats" element={<DriverStats />} />
            <Route path="teamstats" element={<TeamStats />} />
            <Route path="/driverstandings" element={<DriverStandings />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
