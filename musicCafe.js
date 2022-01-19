const musicCafe = {
  _customerPurchase: [
    { name: "Barry", purchase: "Mocha Latte", price: 3.5 },
    { name: "Riley", purchase: "Cappuccino", price: 4.0 },
    { name: "Blake", purchase: "Expresso", price: 3.5 },
    { name: "Taylor", purchase: "Hazelnut Latte", price: 4.5 },
    { name: "Penny", purchase: "Dalgonna Coffee", price: 4.0 },
  ],
  _musicSelection: [
    { artistName: "Nujabes", artistAlbum: "Modal Soul", genre: "Hip-Hop" },
    { artistName: "Daniel Caesar", artistAlbum: "Freudian", genre: "RnB" },
    {
      artistName: "Herb Ellis &  Remo Palmier",
      artistAlbum: "Windflower",
      genre: "Jazz",
    },
    { artistName: "Meltt", artistAlbum: "Swim Slowly", genre: "Indie Rock" },
    {
      artistName: "Twice",
      artistAlbum: "Formula of Love: O+T=<3",
      genre: "Pop",
    },
  ],

  get customerPurchase() {
    return this._customerPurchase;
  },
  get musicSelection() {
    return this._musicSelection;
  },

  addCustomerPurchase(name, purchase, price) {
    let customerPurchase = {
      name,
      purchase: purchase,
      price: price,
    };
    this.customerPurchase.push(customerPurchase);
  },
  addMusicSelection(artistName, artistAlbum, genre) {
    const musicSelection = {
      artistName: artistName,
      artistAlbum: artistAlbum,
      genre: genre,
    };
    this.musicSelection.push(musicSelection);
  },

  // removeCustomerPurchase(purchaseName){
  //     const updatedCustomerPurchase = this.customerPurchase.filter(purchaseOrder => {
  //         return purchaseOrder.purchase !== purchaseName;
  //     });
  //     this.customerPurchase = updatedCustomerPurchase;
  //     console.log(this.customerPurchase);
  // }

  retrieveCustomerPurchase(name) {
    let specificCustomerOrder = [];
    this._customerPurchase.forEach((customerOrder) => {
      if (customerOrder.name === name) {
        specificCustomerOrder.push(customerOrder.purchase, customerOrder.price);
      }
    });
    //console.log(specificCustomerOrder);
    return specificCustomerOrder;
  },

  removeCustomerPurchase(name, purchase) {
    this._customerPurchase = this._customerPurchase.filter(
      (purchaseOrder) =>
        purchaseOrder.name != name || purchaseOrder.purchase != purchase
    );
    console.log(this._customerPurchase);
  },
};

musicCafe.addCustomerPurchase("Alex", "Vanilla Latte", 3.5);
musicCafe.addCustomerPurchase("Drew", "Caramel Mocha", 4.0);
musicCafe.addCustomerPurchase("Penny", "Expresso", 3.5);
musicCafe.addCustomerPurchase("Barry", "Cappuccino", 4.0);
musicCafe.addCustomerPurchase("Taylor", "Cappuccino", 4.0);
musicCafe.addCustomerPurchase("Blake", "Dalgonna Coffee", 4.0);

musicCafe.addMusicSelection("Crush", "From Midnight to Sunrise", "RnB");
musicCafe.addMusicSelection("Brahny", "moon", "Indie");

musicCafe.removeCustomerPurchase("Penny", "Expresso");

musicCafe.retrieveCustomerPurchase("Blake");
