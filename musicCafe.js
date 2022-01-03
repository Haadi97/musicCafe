const musicCafe ={
    _customerPurchase:[
        {name: 'Barry', purchase: 'Mocha Latte', price: 3.50},
        {name: 'Riley', purchase: 'Cappuccino', price: 4.00},
        {name: 'Blake', purchase: 'Expresso', price: 4.00},
        {name: 'Taylor', purchase: 'Hazelnut Latte', price: 4.50},
        {name: 'Penny', purchase: 'Dalgonna Coffee', price: 4.00}
    ],
    _musicSelection:[
        {artistName: 'Nujabes', artistAlbum: 'Modal Soul', genre:'Hip-Hop'},
        {artistName: 'Daniel Caesar', artistAlbum: 'Freudian', genre:'RnB'},
        {artistName: 'Herb Ellis &  Remo Palmier', artistAlbum: 'Windflower', genre:'Jazz'},
        {artistName: 'Meltt', artistAlbum: 'Swim Slowly', genre:'Indie Rock'},
        {artistName: 'Twice', artistAlbum: 'Formula of Love: O+T=<3', genre:'Pop'}
    ],

    get customerPurchase(){
        return this._customerPurchase;
    },
    get musicSelection(){
        return this._musicSelection;
      },

    addCustomerPurchase(name,purchase,price){
        let customerPurchase = {
            name: name,
            purchase: purchase,
            price: price
        };
        this.customerPurchase.push(customerPurchase);
    },
    addMusicSelection(artistName, artistAlbum, genre){
        const musicSelection = {
            artistName: artistName,
            artistAlbum: artistAlbum,
            genre: genre
        }
        this.musicSelection.push(musicSelection);
    }
};

musicCafe.addCustomerPurchase('Alex', 'Vanilla Latte', 4.00);
musicCafe.addCustomerPurchase('Drew', 'Caramel Mocha', 4.00);

musicCafe.addMusicSelection('Crush', 'From Midnight to Sunrise', 'RnB');
musicCafe.addMusicSelection('Brahny', 'moon', 'Indie');


console.log(musicCafe.musicSelection);
console.log(musicCafe.customerPurchase);