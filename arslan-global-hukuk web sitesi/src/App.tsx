import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
// Will create these as needed or just use current components
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Team from './components/Team';
import SuccessStories from './components/SuccessStories';
import Loader from './components/Loader';
import CasesPage from './pages/CasesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hakkimizda" element={<div className="pt-20"><About /></div>} />
          <Route path="uzmanliklar" element={<div className="pt-20"><PracticeAreas /></div>} />
          <Route path="ekibimiz" element={<div className="pt-20"><Team /></div>} />
          <Route path="basari-hikayeleri" element={<div className="pt-20"><SuccessStories /></div>} />
          <Route path="vakalar" element={<CasesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
