import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import CaterPage from './pages/CaterPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cater" element={<CaterPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />

      </Routes>
    </div>
  );
};
export default App;