import type { ReactNode } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: 'primary' | 'outline';
    href?: string;
    className?: string;
};

export default function Button({ children, variant = 'primary', href, className = '', ...props }: ButtonProps) {
    const baseStyles = "group relative flex items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-full font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:-translate-y-1 whitespace-nowrap";

    const primaryStyles = "bg-zinc-900 border border-white/5 text-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(8,145,178,0.4)] aura:hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.3)] ruby:hover:shadow-[0_10px_40px_-10px_rgba(225,29,72,0.3)] hover:border-cyan-500/50 aura:hover:border-amber-500/50 ruby:hover:border-rose-500/50 hover:bg-zinc-800";

    const outlineStyles = "bg-transparent border border-slate-300 dark:border-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800/80 hover:border-cyan-500/50 aura:hover:border-amber-500/50 ruby:hover:border-rose-500/50 hover:shadow-[0_10px_40px_-10px_rgba(8,145,178,0.2)] aura:hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)] ruby:hover:shadow-[0_10px_40px_-10px_rgba(225,29,72,0.15)]";

    const styles = `${baseStyles} ${variant === 'primary' ? primaryStyles : outlineStyles} ${className}`;

    if (href) {
        return (
            <a href={href} className={styles} {...(props as any)}>
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 w-full h-full">{children}</span>
                {variant === 'primary' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent aura:from-amber-600/10 ruby:from-rose-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                )}
            </a>
        );
    }

    return (
        <button className={styles} {...(props as any)}>
            <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 w-full h-full">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent aura:from-amber-600/10 ruby:from-rose-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
            )}
        </button>
    );
}
