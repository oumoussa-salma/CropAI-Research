import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import TestModel from './pages/TestModel';
import Team from './pages/Team';
import Appendices from './pages/Appendices';
import References from'./pages/References';
import TrainModelForm from './pages/TrainModel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test-model" element={<TestModel />} />
          <Route path="/train-model" element={<TrainModelForm />} />
          <Route path="/team" element={<Team />} />
          <Route path="/appendices" element={<Appendices />} />
          <Route path="/References" element={<References />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;