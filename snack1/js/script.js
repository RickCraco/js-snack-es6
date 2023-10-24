class Vips {
  constructor(tableName, guestName, seatplace = 0) {
    this.tableName = tableName;
    this.guestName = guestName;
    this.seatplace = sitplace;
  }
}

const tableList = [
  'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo',
  'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez',
  'George Clooney', 'Amal Clooney', 'Maneskin'
];

const segnaPosto = tableList.map(function (guest, index) {
  return new Vips(guest.tableName = 'tavolo vip', guest.guestName = guest, guest.seatplace = index + 1);
})

console.log(segnaPosto);

  //versione non usando map che ha un valore di ritorno

/*
let lista = [];

for(let i = 0; i < tableList.length; i++){
  tableList[i].place = i + 1;
  lista.push(tableList[i]);
}

console.log(lista);
*/