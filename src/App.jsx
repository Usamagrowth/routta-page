import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Safety from './components/Safety';
import BookingPreview from './components/BookingPreview';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <WhyChoose />
      <Safety />
      <BookingPreview />
      <Pricing />
      <About />
      <FAQ />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
