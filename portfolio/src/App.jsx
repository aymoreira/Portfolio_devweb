import Header from './components/Header';
import Hero from './components/Hero.jsx';

function App() {
  return (
      <main className="min-h-screen bg-white">
        <Header activeNav="about" />
          <Hero/>

      </main>
  );
}

export default App;
