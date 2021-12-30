import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import About from './components/About.';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './Messageparser';
import config from './config';
import ActionProvider from './Actionprovider';
import 'react-chatbot-kit/build/main.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
