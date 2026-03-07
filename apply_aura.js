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

let updatedCount = 0;

filesToProcess.forEach(p => {
    let content = fs.readFileSync(p, 'utf8');
    let originalContent = content;

    // App Background
    content = content.replace(/dark:bg-\[\#0a0a0a\]/g, 'dark:bg-[#0a0a0a] aura:bg-[#09090B]');

    // Texts
    content = content.replace(/dark:text-cyan-400([^a-zA-Z0-9_-])/g, 'dark:text-cyan-400 aura:text-[#FBBF24]$1');
    content = content.replace(/dark:text-zinc-50([^a-zA-Z0-9_-])/g, 'dark:text-zinc-50 aura:text-[#F8FAFC]$1');

    // Backgrounds
    content = content.replace(/dark:bg-cyan-500([^a-zA-Z0-9_-])/g, 'dark:bg-cyan-500 aura:bg-[#D4AF37]$1');
    content = content.replace(/dark:bg-cyan-600([^a-zA-Z0-9_-])/g, 'dark:bg-cyan-600 aura:bg-[#B8942F]$1');
    content = content.replace(/bg-cyan-700([^a-zA-Z0-9_-])/g, 'bg-cyan-700 aura:bg-[#B8942F]$1');
    content = content.replace(/hover:bg-cyan-700([^a-zA-Z0-9_-])/g, 'hover:bg-cyan-700 aura:hover:bg-[#B8942F]$1');

    // Borders
    content = content.replace(/border-cyan-500(\/\d+)?([^a-zA-Z0-9_-])/g, 'border-cyan-500$1 aura:border-[#FBBF24]$1$2');
    content = content.replace(/border-cyan-400(\/\d+)?([^a-zA-Z0-9_-])/g, 'border-cyan-400$1 aura:border-[#FBBF24]$1$2');

    // Glows (from cyan/blue to gold)
    content = content.replace(/bg-cyan-900\/5/g, 'bg-cyan-900/5 aura:bg-[#FBBF24]/5');
    content = content.replace(/bg-cyan-600\/5/g, 'bg-cyan-600/5 aura:bg-[#FBBF24]/5');
    content = content.replace(/bg-cyan-500\/10/g, 'bg-cyan-500/10 aura:bg-[#FBBF24]/5');
    content = content.replace(/bg-cyan-400\/10/g, 'bg-cyan-400/10 aura:bg-[#FBBF24]/5');
    content = content.replace(/bg-indigo-900\/5/g, 'bg-indigo-900/5 aura:bg-transparent');
    content = content.replace(/dark:bg-white\/5([^a-zA-Z0-9_-])/g, 'dark:bg-white/5 aura:bg-[#FBBF24]/5$1');

    // Remove duplicates accidentally created
    content = content.replace(/aura:text-\[\#FBBF24\] aura:text-\[\#FBBF24\]/g, 'aura:text-[#FBBF24]');
    content = content.replace(/aura:bg-\[\#D4AF37\] aura:bg-\[\#D4AF37\]/g, 'aura:bg-[#D4AF37]');
    content = content.replace(/aura:text-\[\#F8FAFC\] aura:text-\[\#F8FAFC\]/g, 'aura:text-[#F8FAFC]');

    // Fix custom shadows
    content = content.replace(/shadow-\[0_10px_40px_-10px_rgba\(8,145,178,0\.5\)\]/g, 'shadow-[0_10px_40px_-10px_rgba(8,145,178,0.5)] aura:shadow-[0_10px_40px_-10px_rgba(251,191,36,0.3)]');

    if (content !== originalContent) {
        fs.writeFileSync(p, content);
        updatedCount++;
        console.log('Injetted Aura to ' + path.basename(p));
    }
});

console.log('Total files updated with Aura Theme:', updatedCount);
