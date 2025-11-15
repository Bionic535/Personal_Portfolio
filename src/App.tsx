import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './home.tsx';
import Socials from './Socials.tsx';
import Projects from './ProjectsSection.tsx';
import Education from './education.tsx';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
      </Routes>
    </Layout>
  );
}

export default App;


