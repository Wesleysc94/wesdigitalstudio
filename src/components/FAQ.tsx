import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Button from './Button';

const faqData = [
    {
        question: 'Como funciona a criação de um site profissional, do início à publicação?',
        answer: 'O processo começa com um briefing para entender seu negócio, objetivos e público. Depois definimos a estrutura da página, alinhamos a direção visual, desenvolvemos o projeto, realizamos os ajustes finais e publicamos com performance otimizada. A ideia é conduzir tudo com clareza, sem complicar sua rotina.',
    },
    {
        question: 'Quanto tempo leva para criar uma landing page ou um site institucional?',
        answer: 'Em média, a Landing Page Essencial fica pronta em 7 a 14 dias. Já o Site Institucional Profissional costuma levar de 14 a 21 dias. O prazo varia conforme escopo, quantidade de páginas e agilidade no envio de materiais e aprovações.',
    },
    {
        question: 'O que normalmente está incluso na criação do site?',
        answer: 'Os projetos incluem design personalizado, desenvolvimento responsivo, performance otimizada, integração com WhatsApp, formulário de contato, hospedagem de site por 12 meses e suporte inicial após a publicação. Se houver demandas extras, elas são definidas no escopo antes do início.',
    },
    {
        question: 'O site funciona bem no celular e em outros dispositivos?',
        answer: 'Sim. Todo site responsivo é desenvolvido para funcionar com clareza e boa navegação em celular, tablet e desktop. Isso melhora a experiência do usuário, fortalece a apresentação da marca e ajuda no desempenho comercial da página.',
    },
    {
        question: 'Você cria landing page para Google Ads, Meta Ads e tráfego pago?',
        answer: 'Sim. A Landing Page Essencial é pensada para campanhas de tráfego pago, captação de leads e ações com foco em conversão. A estrutura prioriza mensagem clara, carregamento rápido, boa experiência no mobile e CTA direto para WhatsApp ou formulário.',
    },
    {
        question: 'O site já inclui hospedagem?',
        answer: 'Sim. A hospedagem de site por 12 meses já está incluída no projeto. Ao final desse período, você pode renovar a hospedagem, contratar manutenção contínua ou solicitar a migração para outra estrutura.',
    },
    {
        question: 'Posso atualizar o site depois da publicação?',
        answer: 'Sim. Existe um plano de manutenção opcional para quem deseja manter o site atualizado com mais recorrência. Pequenas alterações podem ser feitas dentro da manutenção. Ajustes avulsos também podem ser solicitados, mas são cobrados separadamente.',
    },
    {
        question: 'Vocês entregam o código-fonte do site?',
        answer: 'Não por padrão. O código-fonte não faz parte da entrega padrão do projeto e pode ser contratado separadamente como um serviço adicional, de acordo com a necessidade do cliente.',
    },
    {
        question: 'O site é preparado para SEO e boas práticas do Google?',
        answer: 'Sim. O desenvolvimento de site personalizado já considera uma base técnica para SEO on-page, com estrutura organizada, hierarquia de conteúdo, performance, responsividade e boas práticas que ajudam o Google a entender melhor a página. Isso fortalece o projeto, embora o crescimento orgânico também dependa de estratégia contínua de conteúdo e posicionamento.',
    },
    {
        question: 'O projeto pode incluir WhatsApp, formulário e canais de contato?',
        answer: 'Sim. A integração com WhatsApp e o formulário de contato fazem parte da estrutura padrão dos projetos. Isso facilita o atendimento, acelera o recebimento de leads e deixa o site mais funcional para empresas, clínicas, escritórios e marcas.',
    },
    {
        question: 'É possível expandir o site no futuro com novas páginas, seções ou blog?',
        answer: 'Sim. O site para empresas é desenvolvido para evoluir com o negócio. Conforme a necessidade, é possível adicionar novas páginas, apresentar mais serviços, criar áreas específicas e expandir a estrutura com blog ou novos conteúdos.',
    },
    {
        question: 'Existe suporte depois que o site entra no ar?',
        answer: 'Sim. Após a publicação, você conta com um suporte inicial para garantir que tudo esteja funcionando corretamente. Depois disso, é possível seguir com manutenção opcional ou solicitar atualizações pontuais conforme a demanda.',
    },
    {
        question: 'Quanto custa criar um site profissional para empresa?',
        answer: 'O investimento varia conforme o objetivo do projeto, a estrutura necessária, a quantidade de páginas e o nível de personalização. A proposta é definida de forma estratégica, para que você entenda com clareza o que está sendo entregue e o que faz sentido para o seu momento.',
    },
    {
        question: 'Preciso ter textos, fotos e identidade visual prontos para começar?',
        answer: 'Não necessariamente tudo pronto. O ideal é ter as informações principais sobre a empresa, serviços e referências. A organização do conteúdo é alinhada ao longo do processo para que o site tenha consistência, clareza e boa apresentação comercial.',
    },
    {
        question: 'Posso começar com uma landing page e expandir para um site institucional depois?',
        answer: 'Sim. Em muitos casos, essa é uma decisão estratégica. Você pode iniciar com uma landing page para validar uma campanha ou oferta e, depois, evoluir para um site institucional mais completo, mantendo coerência de posicionamento e presença digital.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

function FAQItem({ item, index }: { item: typeof faqData[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-b border-slate-200/60 dark:border-white/5 aura:border-amber-500/10 ruby:border-rose-500/10 last:border-b-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 md:py-7 text-left group cursor-pointer"
                aria-expanded={isOpen}
            >
                {/* Colored indicator bar + question text */}
                <div className="flex items-center gap-4 pr-8">
                    <div className={`w-1 self-stretch rounded-full transition-all duration-300 flex-shrink-0 ${isOpen
                            ? 'bg-cyan-500 dark:bg-cyan-400 aura:bg-amber-500 ruby:bg-rose-500'
                            : 'bg-slate-200 dark:bg-white/10 aura:bg-amber-500/20 ruby:bg-rose-500/20 group-hover:bg-cyan-400 dark:group-hover:bg-cyan-500 aura:group-hover:bg-amber-400 ruby:group-hover:bg-rose-400'
                        }`} />
                    <span className={`text-lg md:text-xl font-sans font-medium leading-snug transition-colors duration-300 ${isOpen
                            ? 'text-cyan-600 dark:text-cyan-400 aura:text-amber-500 ruby:text-rose-500'
                            : 'text-slate-800 dark:text-zinc-100 aura:text-zinc-100 ruby:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 aura:group-hover:text-amber-400 ruby:group-hover:text-rose-400'
                        }`}>
                        {item.question}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen
                            ? 'bg-cyan-500/10 dark:bg-cyan-500/20 aura:bg-amber-500/20 ruby:bg-rose-500/20'
                            : 'bg-slate-100 dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 aura:group-hover:bg-amber-900/20 ruby:group-hover:bg-rose-900/20'
                        }`}
                >
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen
                            ? 'text-cyan-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400'
                            : 'text-slate-500 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 aura:group-hover:text-amber-400 ruby:group-hover:text-rose-400'
                        }`} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-7 pl-5 ml-[3px] border-l-2 border-cyan-400/30 dark:border-cyan-500/20 aura:border-amber-500/30 ruby:border-rose-500/30 text-base md:text-lg text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans font-light leading-relaxed pr-16">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section className="py-24 md:py-32 px-6 relative w-full z-10" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Ambient Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-cyan-600/5 aura:bg-amber-600/5 ruby:bg-rose-700/5 rounded-full blur-[100px] opacity-30 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
                        Clareza Antes da Decisão
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-6 leading-[1.15] tracking-tight">
                        Tudo o que você precisa saber <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">antes de iniciar</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Uma FAQ desenhada para responder as dúvidas que mais pesam na decisão: processo, prazo, estrutura, hospedagem, manutenção e o que realmente está incluído em um projeto profissional.
                    </p>
                </motion.div>

                {/* FAQ Accordion Container */}
                <div className="bg-gradient-to-br from-white/70 to-white/20 dark:from-white/[0.03] dark:to-transparent aura:from-amber-100/[0.03] aura:to-transparent ruby:from-rose-100/[0.03] ruby:to-transparent backdrop-blur-2xl rounded-[2rem] border border-slate-200/40 dark:border-white/5 aura:border-amber-500/10 ruby:border-rose-500/10 px-8 md:px-12 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] aura:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.05)] ruby:shadow-[0_20px_40px_-10px_rgba(225,29,72,0.05)]">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="mt-8 md:mt-10"
                >
                    <div className="bg-gradient-to-br from-cyan-50/80 to-white/40 dark:from-cyan-950/20 dark:to-white/[0.02] aura:from-amber-950/20 aura:to-white/[0.02] ruby:from-rose-950/20 ruby:to-white/[0.02] backdrop-blur-2xl rounded-[2rem] border border-cyan-200/40 dark:border-cyan-500/10 aura:border-amber-500/10 ruby:border-rose-500/10 px-8 py-8 md:px-10 md:py-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]">
                        <div className="flex flex-col items-center text-center gap-8">
                            <div>
                                <span className="text-cyan-700 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-semibold tracking-[0.16em] uppercase text-xs block mb-4">
                                    Próximo Passo
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white leading-tight tracking-tight mb-4">
                                    Se o seu projeto pede mais presença, clareza e conversão, a próxima conversa já pode ser objetiva.
                                </h3>
                                <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-base md:text-lg font-light leading-relaxed">
                                    Envie o contexto da sua empresa e receba uma orientação clara sobre escopo, prazo e o formato mais adequado entre landing page e site institucional.
                                </p>
                            </div>

                            <Button
                                href="#footer-cta"
                                variant="primary"
                                className="w-full sm:w-auto"
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    document.getElementById('footer-cta')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Solicitar análise do projeto
                                <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
