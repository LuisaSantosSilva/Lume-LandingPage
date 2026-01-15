import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Benefits } from './components/Benefits/Benefits';

function App() {
  return (
    <>

      <div className="background">
        <Navbar />
        <Hero />
      </div>
      
      <About />
      <Benefits />
  
    </>
  );
}

export default App;