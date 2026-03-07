import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Hero() {
    // Variantes para animação em cascata (stagger)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 overflow-hidden">

            {/* Grid Tecnológico */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] pointer-events-none -z-10" />

            {/* Iluminação suave em Azul/Ciano */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0"
            />

            <div className="z-10 relative max-w-7xl mx-auto mt-20 md:mt-0 w-full">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Coluna da Esquerda: Copywriting */}
                    <div className="flex flex-col items-start text-left">
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-7xl font-serif text-slate-900 dark:text-white mb-6 tracking-tight leading-tight md:leading-[1.1]"
                        >
                            Experiências digitais que transformam visitantes em <span className="text-cyan-600 dark:text-cyan-400 italic">clientes.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-sans max-w-xl mb-12 font-light leading-relaxed"
                        >
                            Websites e landing pages modernas criadas para empresas que desejam transmitir autoridade, gerar confiança e atrair novos contatos pela internet.
                        </motion.p>

                        {/* Container de Botões */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
                            <a
                                href="#projetos"
                                className="group flex gap-3 items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-sans font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
                            >
                                Ver demonstração
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                                className="group flex gap-3 items-center justify-center px-8 py-4 border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-black/20 backdrop-blur-sm text-slate-700 dark:text-slate-300 font-sans font-bold text-sm tracking-widest uppercase rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                            >
                                Solicitar proposta
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </motion.div>

                        {/* Micro-prova social */}
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-slate-500 dark:text-slate-400 font-sans mt-4">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                                <span>Sites rápidos e modernos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                                <span>Focados em conversão</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Coluna da Direita: Mockup Premium Tecnológico */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full h-full flex justify-center lg:justify-end items-center py-10 lg:py-0"
                    >
                        {/* Prompt de geração de imagem: "premium digital studio website mockup displayed on modern laptop and smartphone, dark background with subtle blue lighting, ultra clean UI interface on screen, modern web design layout, futuristic tech aesthetic, high-end startup style, minimalistic composition, cinematic lighting, professional product presentation, 4k resolution" */}
                        <div className="relative w-full max-w-lg lg:max-w-xl">
                            {/* Efeito Glow atrás do Mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />

                            <motion.img
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                src="/mockups/hero_tech_mockup.png"
                                alt="Premium Digital Studio Mockup"
                                className="relative z-10 w-full object-contain drop-shadow-[0_20px_40px_rgba(8,145,178,0.2)] hover:scale-[1.03] transition-transform duration-700 ease-out"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
