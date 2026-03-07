import { ExternalLink } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function CaseStudy() {
    // Variantes de texto
    const textVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="case-study" className="py-24 px-6 relative max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Coluna Esquerda: Textos (Scroll Reveal) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="flex flex-col items-start z-10 w-full"
                >
                    <span className="text-cyan-600 dark:text-cyan-400 font-sans font-semibold tracking-wider uppercase text-sm mb-4">
                        Projetos Demonstrativos
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 dark:text-zinc-50 mb-8 leading-tight">
                        <span className="italic">Aura Odonto</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg md:text-xl mb-10 leading-relaxed font-light">
                        Demonstração de uma plataforma digital desenvolvida para clínicas odontológicas com foco em experiência do usuário, velocidade e máxima conversão de pacientes nas especializações de maior valor agregado.
                    </p>
                    <a
                        href="https://aura-odonto-demo-site.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-3 items-center px-8 py-4 border border-cyan-600 text-cyan-700 dark:border-cyan-500 dark:text-cyan-400 rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-dark transition-all duration-300"
                    >
                        Ver projeto
                        <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Coluna Direita: Imagens/Mockups */}
                <div className="relative w-full h-full flex justify-center items-center py-10 lg:pl-10">
                    {/* Prompt de geração de imagem: "modern dental clinic website interface displayed on laptop mockup, elegant UI design, dark premium aesthetic, medical website layout, clean typography, high-end design style, realistic product presentation, soft studio lighting" */}

                    {/* Efeito luminoso de fundo para o mockup */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 w-full group"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-slate-200/50 dark:border-zinc-800/80 shadow-[0_20px_50px_rgba(8,145,178,0.15)] dark:shadow-[0_20px_50px_rgba(8,145,178,0.2)] group-hover:shadow-[0_30px_60px_rgba(8,145,178,0.25)] dark:group-hover:border-cyan-500/30 transition-all duration-700 ease-out transform group-hover:-translate-y-2 group-hover:scale-[1.02] bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                            <img
                                src="/mockups/case_study_mockup.png"
                                alt="Aura Odonto Premium Dashboard"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay sutil com texto explicativo na base */}
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start translate-y-4 group-hover:translate-y-0">
                                <span className="text-white font-serif text-2xl mb-2">Aura Odonto Clínicas</span>
                                <span className="text-cyan-400 font-sans text-sm font-light">Visualização de alta resolução do layout desenvolvido focando em agendamentos High-Ticket.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
