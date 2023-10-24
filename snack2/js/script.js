class Studente{
    constructor(id, nome, votoTot){
        this.id = id;
        this.nome = nome;
        this.votoTot = votoTot;
    }
}

const classe = [
new Studente(213, 'Marco della Rovere',78),
new Studente(110, 'Paola Cortellessa', 96),
new Studente(250 ,'Andrea Mantegna', 48),
new Studente(145, 'Gaia Borromini', 74),
new Studente(196, 'Luigi Grimaldello', 68),
new Studente(102, 'Piero della Francesca', 50),
new Studente(120, 'Francesca da Polenta', 84)
]

const classeUpperCase = [];

classe.forEach(function(studente){
    classeUpperCase.push(studente.nome.toUpperCase());
})

console.log(classeUpperCase);

const voti1 = classe.filter(function(studente){
    if(studente.votoTot > 70){
        return studente;
    }
})

console.log(voti1);