import About from './components/About';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Navbar onScrollTo={scrollToSection} />
      <Hero />
      <div id="about"><About /></div>
      <Amenities />
      <div id="gallery"><Gallery /></div>
      <div id="menu"><Menu /></div>
      <div id="reviews"><Reviews /></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
