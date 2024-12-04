import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/education';
import Hobbies from './pages/hobbies';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {/* Navbar with black background and orange text */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000000' }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="/">Zach</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/hobbies">Hobbies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Container with dark background and orange text */}
      <div className="container mt-4" style={{ backgroundColor: '#1A1A1A', color: '#FFA500' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Custom styles for active navigation links */}
      <style>
        {`
          .nav-link.active {
            color: #FFA500 !important; /* Orange for active links */
          }
          .navbar-nav .nav-item:hover .nav-link {
            color: #FFA500 !important; /* Highlight links with hover */
          }
        `}
      </style>
    </Router>
  );
}

export default App;
