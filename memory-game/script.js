class Shoes{
    constructor(name){
        this.name = name;
        this.availableSizes = [];
    }
    checkAvailable(current){
            this.availableSizes.findIndex(size =>{
            if (current === size){
                console.log(current + " is available");

            } else{
                console.log("size " + current + " is not available this time")
            }
        }) 
    }
};

let shoeOne = new Shoes("nike");
shoeOne.availableSizes = [36, 37, 38, 39]
shoeOne.checkAvailable(38);