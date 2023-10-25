const biciclette = [
    { nome: 'bici1', peso: 8 },
    { nome: 'bici2', peso: 7.5 },
    { nome: 'bici3', peso: 7.2 },
    { nome: 'bici4', peso: 8.3 },
];

let pesoMinore = biciclette[0];
bicicletteDaCorsa.forEach(bici => {
    if (bici.peso < pesoMinore) {
        pesoMinore = bici.peso;
    }
});

bicicletteDaCorsa.forEach(bici => {
    if (bici.peso === pesoMinore) {
        const { nome, peso } = bici;
        console.log(`Bici "${nome}" con peso minore di ${peso} kg.`);
    }
});
