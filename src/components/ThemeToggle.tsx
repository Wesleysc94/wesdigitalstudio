import { useEffect, useState } from 'react';
import { Moon, Sun, Crown, Flame } from 'lucide-react';

type Theme = 'light' | 'dark' | 'aura' | 'ruby';

export default function ThemeToggle() {
 const [theme, setTheme] = useState<Theme>('light');

 useEffect(() => {
 let currentTheme: Theme = 'light';
 if (localStorage.theme === 'aura') {
 currentTheme = 'aura';
 } else if (localStorage.theme === 'ruby') {
 currentTheme = 'ruby';
 } else if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
 currentTheme = 'dark';
 }

 setTheme(currentTheme);
 applyThemeClass(currentTheme);
 }, []);

 const applyThemeClass = (t: Theme) => {
 const root = document.documentElement;
 root.classList.remove('light', 'dark', 'aura', 'ruby');
 if (t !== 'light') {
 root.classList.add(t);
 }
 };

 const toggleTheme = () => {
 const nextThemeMap: Record<Theme, Theme> = {
 light: 'dark',
 dark: 'aura',
 aura: 'ruby',
 ruby: 'light'
 };
 const newTheme = nextThemeMap[theme];
 setTheme(newTheme);
 localStorage.theme = newTheme;
 applyThemeClass(newTheme);
 };

 return (
 <button
 onClick={toggleTheme}
 className={`p-2 rounded-full transition-colors duration-300 border border-transparent 
 ${theme === 'light' ? 'bg-slate-200 text-slate-800 hover:bg-slate-300'
 : theme === 'dark' ? 'bg-darkBase text-cyan-400 border-white/10 hover:bg-black'
 : theme === 'aura' ? 'bg-[#18181B] text-amber-500 border-amber-500/30 hover:bg-black hover:border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
 : 'bg-[#18181B] text-rose-500 border-rose-500/30 hover:bg-black hover:border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.15)]'}`}
 aria-label="Toggle theme"
 title={`Tema Atual: ${theme.toUpperCase()}`}
 >
 {theme === 'light' && <Sun size={20} />}
 {theme === 'dark' && <Moon size={20} />}
 {theme === 'aura' && <Crown size={20} />}
 {theme === 'ruby' && <Flame size={20} />}
 </button>
 );
}
