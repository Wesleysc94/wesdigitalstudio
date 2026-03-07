import fs from 'fs';

let c = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const logo = `
                        {/* --- NOVO EMBLEMA W ANIMADO --- */}
                        <div
                            className="w-20 h-20 md:w-28 md:h-28 mb-8 flex-shrink-0 rounded-full border border-cyan-200/50 dark:border-cyan-800/40 bg-white/50 dark:bg-[#0a0a0a]/50 aura:bg-[#09090B]/50 ruby:bg-[#050505]/50 backdrop-blur-md flex flex-col items-center justify-center relative group cursor-default shadow-lg transition-shadow duration-500"
                        >
                            <div className="absolute inset-1 border border-cyan-400 dark:border-cyan-500 aura:border-amber-500 ruby:border-rose-500 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-[8px] border border-cyan-300/30 dark:border-cyan-400/30 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                            <span className="font-serif text-3xl md:text-5xl text-slate-900 dark:text-white aura:text-white ruby:text-white italic relative z-10 opacity-90 transition-opacity">
                                W
                            </span>
                        </div>
                        {/* --- FIM DO EMBLEMA --- */}
`;

c = c.split('<motion.h1').join(logo + '                        <motion.h1');
fs.writeFileSync('src/components/Hero.tsx', c);
console.log('Logo inserida com sucesso no Hero.tsx!');
