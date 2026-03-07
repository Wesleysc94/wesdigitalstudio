import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'src/components');
const appFile = path.join(__dirname, 'src/App.tsx');

const filesToProcess = [
    ...fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f)),
    appFile
];

let count = 0;

filesToProcess.forEach(p => {
    let content = fs.readFileSync(p, 'utf8');
    let originalContent = content;

    // 1. Limpeza Segura (Purge de Aura Antigo e qualquer class custom injetada mal)
    // Remove classes como aura:text-[#D4AF37], aura:hover:bg-etc e ruby:...
    content = content.replace(/\b(?:aura|ruby):[a-zA-Z0-9_\-\/\[\]#:]+\b/g, '');

    // Limpa múltiplos espaços deixados para trás
    content = content.replace(/  +/g, ' ');

    // 2. Mapeamento Smart de Cores de Fundo Globais
    content = content.replace(/dark:bg-\[\#0a0a0a\]/g, 'dark:bg-[#0a0a0a] aura:bg-[#09090B] ruby:bg-[#050505]');

    // 3. Mapeamento Tipográfico (Acessibilidade Altíssima)
    // Textos Base Claros
    content = content.replace(/dark:text-zinc-50/g, 'dark:text-zinc-50 aura:text-slate-50 ruby:text-slate-50');
    content = content.replace(/dark:text-zinc-400/g, 'dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400');

    // Textos Highlights (Neons que viram Pastel pra não cegar o usuário)
    content = content.replace(/dark:text-cyan-400/g, 'dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400');
    content = content.replace(/\btext-cyan-600\b/g, 'text-cyan-600 aura:text-amber-500 ruby:text-rose-600');

    // 4. Mapeamento de Botões Quentes (Onde a conversão acontece)
    content = content.replace(/dark:bg-cyan-500/g, 'dark:bg-cyan-500 aura:bg-amber-500 ruby:bg-rose-600');
    content = content.replace(/\bbg-cyan-600\b/g, 'bg-cyan-600 aura:bg-amber-600 ruby:bg-rose-700');
    content = content.replace(/\bhover:bg-cyan-700\b/g, 'hover:bg-cyan-700 aura:hover:bg-amber-700 ruby:hover:bg-rose-800');

    // Badges (Etiquetas Srtificiais Suaves)
    content = content.replace(/dark:bg-cyan-900\/30/g, 'dark:bg-cyan-900/30 aura:bg-amber-900/30 ruby:bg-rose-900/30');
    content = content.replace(/dark:text-cyan-300/g, 'dark:text-cyan-300 aura:text-amber-300 ruby:text-rose-300');

    // 5. Bordas Delicadas
    content = content.replace(/\bborder-cyan-500\b/g, 'border-cyan-500 aura:border-amber-500 ruby:border-rose-500');
    content = content.replace(/\bborder-cyan-400\b/g, 'border-cyan-400 aura:border-amber-400 ruby:border-rose-400');
    content = content.replace(/dark:border-white\/10/g, 'dark:border-white/10 aura:border-white/10 ruby:border-white/10');

    // 6. Glows Fantasmas (Ultra Suaves focados no Mobile Performance % não travam GPU)
    content = content.replace(/bg-cyan-900\/5/g, 'bg-cyan-900/5 aura:bg-amber-500/5 ruby:bg-rose-500/5');
    // Substitui os whites dos cantos do site para tons respectivos ultra leves
    content = content.replace(/dark:bg-white\/5/g, 'dark:bg-white/5 aura:bg-amber-500/5 ruby:bg-rose-500/5');

    // Custom Shadows para o botão WhatsApp FooterCTA
    content = content.replace(/shadow-\[0_10px_40px_-10px_rgba\(8,145,178,0\.5\)\]/g, 'shadow-[0_10px_40px_-10px_rgba(8,145,178,0.5)] aura:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.3)] ruby:shadow-[0_10px_40px_-10px_rgba(225,29,72,0.3)]');

    // Nova formatação para evitar bugs JSX (` </motion.div>` class mapping spacing error)
    content = content.replace(/ className=" /g, ' className="');

    if (content !== originalContent) {
        fs.writeFileSync(p, content);
        count++;
    }
});

console.log('Script executado. Harmonização completa aplicada em ' + count + ' arquivos.');
