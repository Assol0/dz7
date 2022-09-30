class Transport {
    constructor (title, model, color, price){
        this.title = title;
        this.model = model;
        this.color = color;
        this.price = price;
    }

}
class Car extends Transport {
    constructor(title, model, color, price){
        super(title, model, color, price)
    }
}
const Fit = new Car ("Fit", "Honda", "gray", "0.05967$") 
console.log(Fit);

class Plane extends Transport {
    constructor(title, model, color, price){
        super(title, model, color, price)
    }
}
const PiperJet = new Plane ("PiperJet", "PA-47", "white", "2,2million")
console.log(PiperJet);

class Yacht extends Transport {
    constructor(title, model, color, price){
        super(title, model, color, price)
    }
}
const Nazca = new Yacht ("Nazca", "Yacht", "white-black", "4 555 145 $")
console.log(Nazca);