import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';

function App() {
  return (
    <>

      <div className="background">
        <Navbar />
        <Hero />
      </div>
      
      <About />
  
    </>
  );
}

export default App;