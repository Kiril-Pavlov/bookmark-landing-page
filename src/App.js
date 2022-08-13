import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Features from './components/Features';
import Download from './components/Download';
import Questions from './components/Questions';
import Contact from './components/Contact';
import Footer from './components/Footer';

const navbarLinks = [
  { title: "FEATURES", url: "#" },
  { title: "PRICING", url: "#" },
  { title: "CONTACT", url: "#" }
]

function App() {
  return (
    <div className="App">
      <Nav navbarLinks={navbarLinks} />
      <Home />
      <Features />
      <Download />
      <Questions  /> 
      <Contact /> 
      <Footer  navbarLinks={navbarLinks}/>
    </div>
  );
}

export default App;
