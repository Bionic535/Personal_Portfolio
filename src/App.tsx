import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './home.tsx';
import Socials from './Socials.tsx';
import Projects from './ProjectsSection.tsx';
import Education from './education.tsx';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  useEffect(() => {}, [navigate]);
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;


