class Vips {
  constructor(tableName, guestName, seatplace = 0) {
    this.tableName = tableName;
    this.guestName = guestName;
    this.seatplace = seatplace;
  }
}

const tableList = [
  'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo',
  'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez',
  'George Clooney', 'Amal Clooney', 'Maneskin'
];

const segnaPosto = tableList.map(function (guest, index) {
  return new Vips('tavolo vip', guest, index + 1);
})

console.log(segnaPosto);

//versione non usando map che ha un valore di ritorno

/*
let lista = [];

for(let i = 0; i < tableList.length; i++){
  lista.push(new Vips('tavolo vip', tableList[i], i + 1));
}

console.log(lista);
*/