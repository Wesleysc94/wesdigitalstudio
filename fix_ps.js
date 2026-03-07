import fs from 'fs';
const file = 'src/components/ProblemSolution.tsx';
let c = fs.readFileSync(file, 'utf8');

c = c.replace(/<div className="relative"\s*>\s*<div className="absolute -inset-4 bg-cyan-900\/10/g, 'className="relative"\n  >\n  <div className="absolute -inset-4 bg-cyan-900/10');

fs.writeFileSync(file, c);
console.log('Fixed ProblemSolution syntax again!');
