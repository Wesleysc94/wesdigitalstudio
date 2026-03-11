import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-fade';

interface Project {
    name: string;
    subtitle: string;
    description: string;
    url: string;
    images: string[];
}

const projects: Project[] = [
    {
        name: "Aura Odonto",
        subtitle: "Clínica Odontológica · Website Institucional",
        description: "Design focado em transmitir autoridade odontológica e maximizar a captação de pacientes de alto ticket.",
        url: "https://aura-odontologia-premium.vercel.app/",
        images: [
            "/mockups/versao azul desktop e mobile.webp",
            "/mockups/versao dark mobil e desktop.webp",
            "/mockups/versao desktopa azul.webp",
            "/mockups/versao dark desktop.webp",
            "/mockups/versao azul mobile.webp",
        ],
    },
    {
        name: "Aura Vet",
        subtitle: "Clínica Veterinária · Website Institucional",
        description: "Medicina veterinária de precisão com design sofisticado e experiência acolhedora para tutores exigentes.",
        url: "https://veterinaria-premium-demo.vercel.app/",
        images: [
            "/mockups/vet-hero.webp",
            "/mockups/vet-middle.webp",
            "/mockups/vet-bottom.webp",
        ],
    },
    {
        name: "Maison Aura",
        subtitle: "Estética Facial · Website Institucional",
        description: "Estética facial premium com interface que transmite luxo, precisão clínica e confiança instantânea.",
        url: "https://maison-aura-estetica-premium-demo.vercel.app/",
        images: [
            "/mockups/maison-hero.webp",
            "/mockups/maison-middle.webp",
            "/mockups/maison-bottom.webp",
        ],
    },
    {
        name: "Advocacia Clássica",
        subtitle: "Escritório Jurídico · Website Institucional",
        description: "Interface sofisticada para escritório de advocacia, projetada para comunicar credibilidade e autoridade jurídica.",
        url: "https://advocacia-premium-v1.vercel.app/",
        images: [
            "/mockups/adv-v1-hero-dark.webp",
            "/mockups/adv-v1-sobre.webp",
            "/mockups/adv-v1-atuacao.webp",
            "/mockups/adv-v1-contato.webp",
            "/mockups/adv-v1-hero-light.webp",
        ],
    },
    {
        name: "Advocacia Executiva",
        subtitle: "Assessoria Jurídica · Website Institucional",
        description: "Website institucional com estrutura persuasiva e formulário inteligente para captação de clientes empresariais.",
        url: "https://advocacia-premium-v2.vercel.app/",
        images: [
            "/mockups/adv-v2-hero.webp",
            "/mockups/adv-v2-sobre.webp",
            "/mockups/adv-v2-areas.webp",
            "/mockups/adv-v2-contato.webp",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.92, filter: "blur(12px)" },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            variants={cardVariants}
            className="group relative flex flex-col rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-white/8 aura:border-white/8 ruby:border-white/8 bg-white dark:bg-zinc-900/80 aura:bg-[#0a0a0a]/90 ruby:bg-[#0a0a0a]/90 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-15px_rgba(8,145,178,0.2)] dark:hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] aura:hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.15)] ruby:hover:shadow-[0_20px_50px_-15px_rgba(225,29,72,0.15)] transition-all duration-500 hover:-translate-y-2"
        >
            {/* Image Slideshow Area */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={1200}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    allowTouchMove={false}
                    className="w-full h-full"
                >
                    {project.images.map((img, idx) => (
                        <SwiperSlide key={idx} className="w-full h-full">
                            <img
                                src={img}
                                alt={`${project.name} — ${project.subtitle} — Screenshot ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover object-top"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Hover Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/95 dark:bg-white/90 text-slate-900 rounded-full text-sm font-sans font-semibold tracking-wide hover:bg-white transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                    >
                        Ver Projeto
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* Subtle top gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-[5]" />
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-2 p-6 md:p-7 flex-1">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-serif font-semibold text-slate-900 dark:text-white aura:text-white ruby:text-white tracking-tight leading-tight truncate">
                            {project.name}
                        </h3>
                        <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-medium text-xs tracking-wide uppercase mt-1 block">
                            {project.subtitle}
                        </span>
                    </div>
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-9 h-9 rounded-full border border-slate-200 dark:border-zinc-700 aura:border-amber-500/30 ruby:border-rose-500/30 flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 aura:hover:text-amber-500 ruby:hover:text-rose-500 hover:border-cyan-500 dark:hover:border-cyan-500 aura:hover:border-amber-500 ruby:hover:border-rose-500 transition-all duration-300 hover:-translate-y-0.5"
                        aria-label={`Visitar ${project.name}`}
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
                <p className="text-slate-500 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-sm font-light leading-relaxed tracking-wide mt-1">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function CaseStudy() {
    return (
        <section id="case-study" className="py-16 md:py-28 px-6 relative max-w-screen-2xl mx-auto z-20">

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-16 md:mb-24"
            >
                <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
                    Projetos Demonstrativos
                </span>
                <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6">
                    Nosso <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">portfólio.</span>
                </h2>
                <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
                    Cada projeto é um ecossistema digital único, desenhado para gerar autoridade e conversão.
                </p>
            </motion.div>

            {/* Project Gallery Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </motion.div>
        </section>
    );
}
