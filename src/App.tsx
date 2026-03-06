import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import CaseStudy from './components/CaseStudy';
import Benefits from './components/Benefits';
import NicheExpansion from './components/NicheExpansion';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Header Fixo Simples / Botão de Tema */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-end items-center pointer-events-none">
        <div className="glass rounded-full pointer-events-auto">
          <ThemeToggle />
        </div>
      </header>

      <main className="overflow-x-hidden">
        <Hero />
        <CaseStudy />
        <Benefits />
        <NicheExpansion />
      </main>

      <FooterCTA />
    </div>
  );
}

export default App;
