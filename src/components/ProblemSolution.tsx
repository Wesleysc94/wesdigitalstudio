import { motion } from 'framer-motion';

export default function ProblemSolution() {
    return (
        <section className="py-24 md:py-32 px-6 relative w-full overflow-visible z-10">
            <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* O Problema */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-6 md:mb-10 leading-[1.15] md:leading-[1.1] tracking-tight">
                        Muitos negócios oferecem serviços excelentes, mas possuem uma presença que <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">não transmite sua verdadeira autoridade.</span>
                    </h2>

                    <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-base sm:text-lg md:text-xl md:text-2xl font-light leading-relaxed mb-8 tracking-wide">
                        Na internet, a primeira impressão acontece antes mesmo do contato. Uma presença digital confusa ou amadora afasta potenciais clientes de alto valor.
                    </p>
                </motion.div>

                {/* A Solução */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="relative group cursor-default"
                >
                    <div className="absolute -inset-4 bg-cyan-900/10 dark:bg-cyan-500/10 aura:bg-amber-500/10 ruby:bg-rose-600/10 blur-xl md:blur-2xl opacity-50 md:opacity-100 rounded-[2.5rem] -z-10 transition-colors duration-500" />
                    <div className="bg-gradient-to-br from-white/60 to-white/10 dark:from-white/5 dark:to-transparent aura:from-amber-100/5 aura:to-transparent ruby:from-rose-100/5 ruby:to-transparent backdrop-blur-2xl p-10 md:p-14 lg:p-16 rounded-[2.5rem] border border-cyan-200/20 dark:border-white/5 aura:border-white/5 ruby:border-white/5 flex flex-col gap-6 text-center md:text-left transition-all duration-500 group-hover:-translate-y-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] aura:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.05)] ruby:shadow-[0_20px_40px_-10px_rgba(225,29,72,0.05)] group-hover:shadow-[0_20px_40px_-5px_rgba(8,145,178,0.15)] dark:group-hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.6)] box-border">
                        <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 flex items-center justify-center mb-2 mx-auto md:mx-0 shadow-sm dark:shadow-none transition-transform duration-500 group-hover:scale-110">
                            <span className="text-2xl font-serif italic">W</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white leading-tight">
                            Design focado em resultados.
                        </h3>
                        <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-lg md:text-xl font-light leading-relaxed tracking-wide">
                            Projetamos ecossistemas virtuais premium que resgatam essa percepção de valor instantaneamente, elevando seu ticket médio e a confiança do visitante.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
