import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import ProblemSolution from './components/ProblemSolution';
import Solutions from './components/Solutions';
import CaseStudy from './components/CaseStudy';
import WorkProcess from './components/WorkProcess';
import AboutStudio from './components/AboutStudio';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 text-slate-900 dark:text-zinc-50">
      {/* Header Fixo Simples / Botão de Tema */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-end items-center pointer-events-none">
        <div className="glass rounded-full pointer-events-auto">
          <ThemeToggle />
        </div>
      </header>

      <main className="overflow-x-hidden">
        <Hero />
        <Positioning />
        <ProblemSolution />
        <Solutions />
        <CaseStudy />
        <WorkProcess />
        <AboutStudio />
        {/* NicheExpansion será apagado e não deve mais integrar a main */}
      </main>

      <FooterCTA />
    </div>
  );
}

export default App;
