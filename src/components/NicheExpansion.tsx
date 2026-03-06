import { CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function NicheExpansion() {
    const niches = [
        "Clínicas de Estética e Dermatologia",
        "Clínicas Veterinárias",
        "Escritórios de Advocacia e Consultoria",
        "Não encontrou seu nicho? Me chama no WhatsApp e a gente adapta para o seu negócio."
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 px-6 relative max-w-4xl mx-auto z-10 text-center">
            <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-serif text-slate-800 dark:text-white mb-6 leading-tight"
            >
                Uma estrutura adaptável ao seu <span className="italic text-teal dark:text-gold">nível de exigência.</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-600 dark:text-zinc-400 font-sans text-lg md:text-xl mb-12 font-light leading-relaxed"
            >
                A mesma inteligência visual e de conversão aplicada na odontologia premium pode ser personalizada para destacar outras especialidades:
            </motion.p>

            <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col gap-6 items-center"
            >
                {niches.map((niche, index) => (
                    <motion.li
                        variants={itemVariants}
                        key={index}
                        className="flex items-center gap-4 text-left w-full max-w-md glass px-8 py-5 rounded-2xl hover:scale-105 transition-transform duration-300"
                    >
                        <CheckCircle2 className="w-6 h-6 text-teal dark:text-gold flex-shrink-0" />
                        <span className="text-slate-800 dark:text-zinc-100 font-sans font-medium text-lg">
                            {niche}
                        </span>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
}
