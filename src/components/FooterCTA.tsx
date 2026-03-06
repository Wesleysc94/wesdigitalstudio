import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterCTA() {
    return (
        <footer className="relative mt-20 py-24 px-6 overflow-hidden">
            {/* Background Section-Specific */}
            <div className="absolute inset-0 bg-slate-200/50 dark:bg-black/40 -z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-teal/10 dark:bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-slate-800 dark:text-white mb-6 leading-tight">
                    O seu consultório merece uma presença digital <span className="italic text-teal dark:text-gold">à altura das suas especializações.</span>
                </h2>

                <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg md:text-xl mb-10 font-light max-w-2xl">
                    Vamos conversar sobre o projeto da sua clínica e criar uma ferramenta de vendas contínua.
                </p>

                <a
                    href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                    className="group flex gap-3 items-center px-8 py-4 bg-teal dark:bg-gold text-white dark:text-dark font-sans font-bold text-sm tracking-widest uppercase rounded-full shadow-lg shadow-teal/20 dark:shadow-gold/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal/30 dark:hover:shadow-gold/20 transition-all duration-300"
                >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Falar com Especialista
                </a>

                <div className="mt-20 text-slate-500 dark:text-zinc-600 font-sans text-sm">
                    &copy; {new Date().getFullYear()} Wes Digital Studio - Web Design for Health Premium
                </div>
            </motion.div>
        </footer>
    );
}
