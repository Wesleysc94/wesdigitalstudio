import { Zap, Smartphone, Settings } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Benefits() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 px-6 relative max-w-7xl mx-auto z-10">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-slate-800 dark:text-white leading-tight">
                    Tecnologia silenciosa. <span className="italic text-teal dark:text-gold">Resultados reais.</span>
                </h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {/* Card 1 */}
                <motion.div variants={cardVariants} className="glass p-8 rounded-3xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal dark:bg-gold/10 dark:text-gold flex items-center justify-center">
                        <Zap className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-sans font-semibold text-slate-900 dark:text-zinc-50">Velocidade Extrema (Nota 90+)</h3>
                    <p className="text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
                        Sites otimizados que carregam em menos de 2 segundos. Sem perda de pacientes impacientes.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div variants={cardVariants} className="glass p-8 rounded-3xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal dark:bg-gold/10 dark:text-gold flex items-center justify-center">
                        <Smartphone className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-sans font-semibold text-slate-900 dark:text-zinc-50">Mobile First</h3>
                    <p className="text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
                        Experiência perfeita no smartphone, onde 80% do seu tráfego qualificado fará o primeiro contato.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div variants={cardVariants} className="glass p-8 rounded-3xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal dark:bg-gold/10 dark:text-gold flex items-center justify-center">
                        <Settings className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-sans font-semibold text-slate-900 dark:text-zinc-50">100% Done-For-You</h3>
                    <p className="text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
                        Você aprova a estética, nós cuidamos de todo o código, hospedagem e integração. Zero dor de cabeça para você e sua secretária.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
