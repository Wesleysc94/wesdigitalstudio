import { motion } from 'framer-motion';

const technologies = [
    {
        name: 'React',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.236-2.236 2.236 2.236 0 0 1 2.235 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.06-.839.178-1.206.615-1.579 2.662-.963 5.34C3.258 8.144 2 9.956 2 12.004c0 2.044 1.254 3.856 3.301 5.152-.616 2.682-.243 4.729.963 5.344.247.118.529.178.839.178 1.345 0 3.107-.96 4.888-2.622 1.78 1.653 3.542 2.602 4.887 2.602.31 0 .592-.06.839-.178 1.206-.615 1.579-2.662.963-5.34C20.742 15.856 22 14.044 22 12.004c0-2.044-1.254-3.856-3.301-5.152.616-2.682.243-4.729-.963-5.344a1.724 1.724 0 0 0-.839-.178zM16.5 12.004c0 .72-.18 1.4-.502 1.996l.106.07c1.29.855 2.134 1.778 2.449 2.577.25.637.166 1.087-.104 1.224-.369.189-1.164-.089-2.223-.729l-.093-.058a8.91 8.91 0 0 1-1.596 1.212l-.03.132c-.423 1.856-.898 2.84-1.506 2.84-.33 0-.671-.247-1.033-.657a9.477 9.477 0 0 1 .002-4.46l-.002-.11a8.717 8.717 0 0 1-1.943 0l-.107.11a9.477 9.477 0 0 1 .002 4.46c-.362.41-.703.657-1.033.657-.608 0-1.083-.984-1.506-2.84l-.03-.132a8.91 8.91 0 0 1-1.596-1.212l-.093.058c-1.06.64-1.854.918-2.223.729-.27-.137-.354-.587-.104-1.224.315-.799 1.159-1.722 2.449-2.577l.106-.07A4.436 4.436 0 0 1 7.5 12.004c0-.72.18-1.4.502-1.996l-.106-.07C6.606 9.083 5.762 8.16 5.447 7.361c-.25-.637-.166-1.087.104-1.224.369-.189 1.164.089 2.223.729l.093.058a8.91 8.91 0 0 1 1.596-1.212l.03-.132C9.916 3.724 10.391 2.74 11 2.74c.33 0 .671.247 1.033.657a9.477 9.477 0 0 1-.002 4.46l.002.11a8.717 8.717 0 0 1 1.943 0l.107-.11a9.477 9.477 0 0 1-.002-4.46c.362-.41.703-.657 1.033-.657.608 0 1.083.984 1.506 2.84l.03.132a8.91 8.91 0 0 1 1.596 1.212l.093-.058c1.06-.64 1.854-.918 2.223-.729.27.137.354.587.104 1.224-.315.799-1.159 1.722-2.449 2.577l-.106.07c.322.596.502 1.276.502 1.996z" />
            </svg>
        ),
    },
    {
        name: 'TypeScript',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
            </svg>
        ),
    },
    {
        name: 'Tailwind CSS',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
        ),
    },
    {
        name: 'Vite',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-1.76.44a.306.306 0 0 1-.382-.412l.97-4.093a.306.306 0 0 0-.374-.39l-4.076 1.032a.306.306 0 0 1-.37-.37z" />
            </svg>
        ),
    },
    {
        name: 'Vercel',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
            </svg>
        ),
    },
    {
        name: 'Framer Motion',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

export default function TechStack() {
    return (
        <section className="py-16 md:py-24 px-6 relative w-full z-10">
            <div className="max-w-5xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
                        Tecnologias
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white leading-tight tracking-tight">
                        Ferramentas de <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">ponta.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    variants={containerVariants}
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            whileHover={{ y: -4, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full bg-white/70 dark:bg-zinc-900/60 aura:bg-[#0a0a0a]/60 ruby:bg-[#0a0a0a]/60 backdrop-blur-xl border border-slate-200/50 dark:border-white/8 aura:border-white/8 ruby:border-white/8 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_-6px_rgba(8,145,178,0.2)] dark:hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] aura:hover:shadow-[0_8px_24px_-6px_rgba(245,158,11,0.15)] ruby:hover:shadow-[0_8px_24px_-6px_rgba(225,29,72,0.15)] transition-all duration-300 cursor-default"
                        >
                            <div className="text-slate-500 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 aura:group-hover:text-amber-400 ruby:group-hover:text-rose-400 transition-colors duration-300">
                                {tech.icon}
                            </div>
                            <span className="font-sans font-medium text-sm md:text-base text-slate-700 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300 tracking-wide">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
