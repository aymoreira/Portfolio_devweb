import Header from './components/Header';
import Hero from './components/Hero.jsx';
import heroImg from './assets/hero.png';

function App() {
  return (
      <main className="relative min-h-screen overflow-x-hidden bg-white">

          {/* image de fond */}
          <img
              src={heroImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 w-auto max-w-none object-cover object-top"
          />

          {/* contenu au-dessus - shared responsive container so Header and Hero align */}
          <div className="relative z-10">
              <div className="max-w-screen-xl mx-auto px-6">
                  <Header activeNav="about" />
                  <Hero />
              </div>
          </div>
      </main>
  );
}

export default App;
