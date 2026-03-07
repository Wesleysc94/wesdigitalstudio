import fs from 'fs';

let c = fs.readFileSync('src/components/CaseStudy.tsx', 'utf8');
c = c.replace(/"\/mockups\/versao azul mobile\.PNG"[\s\n]*;/m, '"/mockups/versao azul mobile.PNG",\n    ];');
fs.writeFileSync('src/components/CaseStudy.tsx', c);

let w = fs.readFileSync('src/components/WorkProcess.tsx', 'utf8');
w = w.replace(/seguranca constante\."[\s\n]*\}[\s\n]*;/m, 'segurança constante."\n    }\n    ];');
w = w.replace(/segurança constante\."[\s\n]*\}[\s\n]*;/m, 'segurança constante."\n    }\n    ];');
fs.writeFileSync('src/components/WorkProcess.tsx', w);

console.log('Arrays Fixed!');
