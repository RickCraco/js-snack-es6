class Vips{
    constructor(tableName, guestName, place = 0){
      this.tableName = tableName;
      this.guestName = guestName;
      this.place = place;
    }
  }
  
  const tableList = [
    new Vips('Bradd Pitt', 'Tavolo Vip'),
    new Vips('Johnny Depp', 'Tavolo Vip'),
    new Vips('Lady Gaga', 'Tavolo Vip'),
    new Vips('Cristiano Ronaldo', 'Tavolo Vip'),
    new Vips('Georgina Rodriguez', 'Tavolo Vip'),
    new Vips('Chiara Ferragni', 'Tavolo Vip'),
    new Vips('Fedez', 'Tavolo Vip'),
    new Vips('George Clooney', 'Tavolo Vip'),
    new Vips('Amal Clooney', 'Tavolo Vip'),
    new Vips('Maneskin', 'Tavolo Vip')
  ]
  
  const segnaPosto = tableList.map(function(guest, index){
    return new Vips(guest.tableName, guest.guestName, guest.place = index + 1);
  })
  
  console.log(segnaPosto);