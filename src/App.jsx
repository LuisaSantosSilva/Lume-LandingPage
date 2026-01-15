import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <>
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      
      {/* Próximas seções (About, etc) virão aqui fora da div background */}
    </>
  );
}

export default App;