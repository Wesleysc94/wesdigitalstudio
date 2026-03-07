import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'src/components');
const appFile = path.join(__dirname, 'src/App.tsx');
const footerFile = path.join(__dirname, 'src/components/FooterCTA.tsx');

const filesToProcess = [
    ...fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f)),
    appFile
];

let count = 0;

filesToProcess.forEach(p => {
    let content = fs.readFileSync(p, 'utf8');
    let originalContent = content;

    // 1. Limpeza Bruta de TUDO relacionado a aura e ruby e lixo regex
    content = content.replace(/\b(?:aura|ruby):[a-zA-Z0-9_\-\/\[\]#:]+\b/g, '');
    content = content.replace(/ \]/g, ''); // Fix stray brackets
    content = content.replace(/\]/g, ']'); // just in case
    content = content.replace(/  +/g, ' '); // remove multiple spaces

    // A regex anterior deixou um " ]" nas strings. Precisamos limpar manualmente
    content = content.replace(/text-rose-[0-9]+\s*\]/g, '');
    content = content.replace(/bg-rose-[0-9]+\s*\]/g, '');
    content = content.replace(/ruby:[^\s"']+\s*\]/g, '');
    // Force clean up
    content = content.replace(/aura:[^\s"']+/g, '');
    content = content.replace(/ruby:[^\s"']+/g, '');
    content = content.replace(/ \]\s*/g, ' ');

    // 2. Mapeamento Fundamental de Fundos (Dark Backgrounds)
    content = content.replace(/dark:bg-\[\#0a0a0a\]/g, 'dark:bg-[#0a0a0a] aura:bg-[#09090B] ruby:bg-[#050505]');

    // 3. O ERRO CRÍTICO: Textos Primários. No Dark mode, eles são brancos. Precisam ser brancos no Aura e Ruby!
    content = content.replace(/dark:text-white([^a-zA-Z0-9_\-])/g, 'dark:text-white aura:text-white ruby:text-white$1');

    // Textos Secundários (Acinzentados)
    content = content.replace(/dark:text-zinc-400([^a-zA-Z0-9_\-])/g, 'dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400$1');
    content = content.replace(/dark:text-zinc-300([^a-zA-Z0-9_\-])/g, 'dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300$1');
    content = content.replace(/dark:text-zinc-200([^a-zA-Z0-9_\-])/g, 'dark:text-zinc-200 aura:text-zinc-200 ruby:text-zinc-200$1');
    content = content.replace(/dark:text-zinc-50([^a-zA-Z0-9_\-])/g, 'dark:text-zinc-50 aura:text-slate-50 ruby:text-slate-50$1');

    // Textos de Destaque / Highlights Funcionais (Neon vs Pastel)
    content = content.replace(/text-cyan-600([^a-zA-Z0-9_\-])/g, 'text-cyan-600 aura:text-amber-500 ruby:text-rose-600$1');
    content = content.replace(/dark:text-cyan-400([^a-zA-Z0-9_\-])/g, 'dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400$1');
    content = content.replace(/dark:text-cyan-300([^a-zA-Z0-9_\-])/g, 'dark:text-cyan-300 aura:text-amber-300 ruby:text-rose-300$1');

    // 4. Mapeamento de Botões (Backgrounds)
    content = content.replace(/bg-cyan-600([^a-zA-Z0-9_\-])/g, 'bg-cyan-600 aura:bg-amber-600 ruby:bg-rose-700$1');
    content = content.replace(/hover:bg-cyan-700([^a-zA-Z0-9_\-])/g, 'hover:bg-cyan-700 aura:hover:bg-amber-700 ruby:hover:bg-rose-800$1');
    content = content.replace(/dark:bg-cyan-500([^a-zA-Z0-9_\-])/g, 'dark:bg-cyan-500 aura:bg-amber-500 ruby:bg-rose-600$1');

    // Badges e Backgrounds leves
    content = content.replace(/dark:bg-cyan-900\/30([^a-zA-Z0-9_\-])/g, 'dark:bg-cyan-900/30 aura:bg-amber-900/30 ruby:bg-rose-900/30$1');
    content = content.replace(/bg-slate-100([^a-zA-Z0-9_\-])/g, 'bg-slate-100 aura:bg-zinc-800/50 ruby:bg-zinc-900/80$1');
    content = content.replace(/dark:bg-zinc-800\/50([^a-zA-Z0-9_\-])/g, 'dark:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50$1');

    // Bordas
    content = content.replace(/border-cyan-500([^a-zA-Z0-9_\-])/g, 'border-cyan-500 aura:border-amber-500 ruby:border-rose-500$1');
    content = content.replace(/hover:border-cyan-500([^a-zA-Z0-9_\-])/g, 'hover:border-cyan-500 aura:hover:border-amber-500 ruby:hover:border-rose-500$1');

    // Custom Shadows para Botões e Destaques
    content = content.replace(/shadow-\[0_10px_40px_-10px_rgba\(8,145,178,0\.5\)\]([^a-zA-Z0-9_\-])/g, 'shadow-[0_10px_40px_-10px_rgba(8,145,178,0.5)] aura:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.3)] ruby:shadow-[0_10px_40px_-10px_rgba(225,29,72,0.3)]$1');

    // Removendo Blurs Estáticos GIGANTES para performance mobile (se houver refs)
    // Convertendo blurs massives em opacidades menores ou nulas mobile
    // Faremos isso manulmente em Hero.tsx por segurança

    if (content !== originalContent) {
        fs.writeFileSync(p, content);
        count++;
    }
});

console.log('Script de correcao extrema executado em ' + count + ' arquivos.');
