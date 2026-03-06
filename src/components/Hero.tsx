import { MessageCircle } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Hero() {
    // Variantes para animação em cascata (stagger)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Elemento de fundo animado (Pulse) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-teal-light/5 dark:bg-gold/5 rounded-full blur-[120px] pointer-events-none"
            />

            <motion.div
                className="z-10 relative flex flex-col items-center text-center max-w-4xl mx-auto mt-20 md:mt-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800 dark:text-white leading-tight md:leading-snug mb-6"
                >
                    Transformo a autoridade da sua clínica em <span className="text-teal dark:text-gold italic">agendamentos reais.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-sans max-w-2xl mb-10 font-light leading-relaxed"
                >
                    Sites de alta performance e design premium, projetados exclusivamente para a área da saúde e estética.
                </motion.p>

                <motion.a
                    variants={itemVariants}
                    href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                    className="group flex gap-3 items-center px-8 py-4 bg-teal dark:bg-gold text-white dark:text-dark font-sans font-bold text-sm tracking-widest uppercase rounded-full shadow-lg shadow-teal/20 dark:shadow-gold/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal/30 dark:hover:shadow-gold/20 transition-all duration-300"
                >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Solicitar Orçamento no WhatsApp
                </motion.a>
            </motion.div>
        </section>
    );
}
