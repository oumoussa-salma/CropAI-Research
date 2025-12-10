import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TestModel from './pages/TestModel';
import Team from './pages/Team';
import Appendices from './pages/Appendices';
import References from './pages/References';
import TrainModelForm from './pages/TrainModel';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation at the top */}
        <Navigation />
        
        {/* Main content area - flex-grow ensures it takes up available space */}
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test-model" element={<TestModel />} />
            <Route path="/train-model" element={<TrainModelForm />} />
            <Route path="/team" element={<Team />} />
            <Route path="/appendices" element={<Appendices />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>
        
        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;