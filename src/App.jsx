import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import CaterPage from './pages/CaterPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cater" element={<CaterPage />} />
      </Routes>
    </div>
  );
};
export default App;