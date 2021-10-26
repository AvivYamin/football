class ClassicGuitar{
    #id;
    constructor(manufactureYear, brand, price, numOfStrings = 6, id){
        this.#id = id;
        this.manufactureYear = manufactureYear;
        this.brand = brand;
        this.price = price;
        this.numOfStrings = numOfStrings;
        this.used = false;
    }
    play(){
        console.log("🎶🎶🎶");
        let newPrice = this.price * 0.9;
        this.price = newPrice.toFixed(0);
        this.used = true;
    }
    get getPrice(){
        return this.price;
    }
    set setPrice(newPrice){
        this.price = newPrice;
        return this.price;
    }
    get getManuYear(){
        return this. manufactureYear;
    }
    get getBrand(){
        return this.brand;
    }
    get getId(){
        return this.id;
    }
    static detectSound(sound){
        let type = "ClassicGuitar";
        switch (sound) {
            case "🎸":
                type = "ElectricGuitar"
                break;
            case "🔊":
                type = "BassGuitar"
                break;
        }
        return type;        
    }
}

// let guitar = new ClassicGuitar(1996, "Aviv", 1000, 6, 1);
// let guitar2 = new ClassicGuitar(1992, "Ziv", 1500, 6, 2);
// let guitar3 = new ClassicGuitar(2000, "Sanae", 2000, 6, 3);

// guitar.setPrice = 283
// guitar.play();
// console.log(guitar.getBrand)
// let test = ClassicGuitar.detectSound("🎸");

class ElectricGuitar extends ClassicGuitar {
    #id;
    constructor(manufactureYear, brand , price, numOfStrings = 6, id) {
      super(manufactureYear, brand , price, numOfStrings = 6, id);
      this.longNeck = true;
      this.used = false;
    }
    play(){
        console.log("🎸🎸🎸");
        let newPrice = this.price * 0.9;
        this.price = newPrice.toFixed(0);
        this.used = true;
    }
  }

//  let guitar4 = new ElectricGuitar(2020, "Oren", 3000, 3);
//  guitar4.play();
//  guitar4


class BassGuitar extends ClassicGuitar {
    #id;
    constructor(manufactureYear, brand , price, numOfStrings = 4, id) {
        super(manufactureYear, brand , price, numOfStrings = 4, id);
        this.used = false;
    }
    play(){
         console.log("🔊🔊🔊");
         let newPrice = this.price * 0.9;
         this.price = newPrice.toFixed(0);
         this.used = true;
    }
    playSolo(){
    this.used = true;
    console.log("💥", "🤘", "🎵", "📢", "💢", "🕺");
    }
}

 let guitar5 = new BassGuitar(2017, "Ran", 3000, 3);
 //guitar5.playSolo();
 //guitar5.play();
 //guitar5
