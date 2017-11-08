//Excerise 1

function Automobile(wheels) {
    this.wheels= wheels
    this.setColor=(color)=> {
    }
    this.getColor=() => {
        return this.color
    }
    this.gasPedal=() =>{
        return 'Vroom'
    }

}

function Sedan(make,model,year){
    this.make=make
    this.model=model
    this.year=year
    this.doors=4
}

// let car=new Automobile(4)
// let sedan= new Automobile(4)
Sedan.prototype=new Automobile(4)

let genesis=new Sedan("Gulia","Alfa Romeo",2017)


function Camry(make,model,year) {
    this.make=make
    this.model=model
    this.year=year
    this.doors=4
}

let camry=new Camry("Toyota","Camry")
// let year=new Camry(2010)
Camry.prototype=new Sedan(4)

// Excerise 2

class Automobile{
    constructor(wheels){
        this.wheels=wheels
    }
    setColor(color){
      this.color=color
    }
    getColor(){
        return this.color
    }
    gasPedal(){
        return 'Vroom'
    }
}
class Motorcycle extends Automobile{
    constructor(make,model,year){
        super(2)
        this.make=make
        this.model=model
        this.year=year
    }
}

class Sedan extends Automobile{
    constructor(make,model,year,interior,){
        super(2)
        this.make=make
        this.model=model
        this.year=year
        this.interior=interior
        this.exterior=exterior
    }
}

let sedan=new sedan('Mercedes Benz','Maybach',"Leather","Black")
console.log(sedan)