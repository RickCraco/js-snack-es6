const squadre = [
    { nome: 'squadra1', punti: 0, falli: 0 },
    { nome: 'squadra2', punti: 0, falli: 0 },
    { nome: 'squadra3', punti: 0, falli: 0 },
    { nome: 'squadra4', punti: 0, falli: 0 },
];

squadreCalcio.forEach(squadra => {
    squadra.punti = Math.floor(Math.random() * 100);
    squadra.falli = Math.floor(Math.random() * 50); 
});

const squadreConFalli = squadreCalcio.map(({ nome, falli }) => ({ nome, falli }));

console.log('Squadre di calcio complete:');
console.log(squadreCalcio);
console.log('Squadre con nomi e falli subiti:');
console.log(squadreConFalli);
