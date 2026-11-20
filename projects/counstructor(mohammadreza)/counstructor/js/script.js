class home {
    constructor (metr,otagh,anbari,asansor,parking ){
        this.metr = metr;
        this.otagh = otagh;
        this.anbari = anbari;
        this.asansor = asansor;
        this.parking = parking;
    }
    move(){
        console.log("home moved!");
        
    }
    showDetails(){
        console.log(`moshakhasat of this home is ${this.metr}`);
    }
}
let  home135 = new home("135metr","3","yes","yes","no");
let  home85 = new home("85metr","1","yes","no","no");
let  home110 = new home("110metr","2","no","yes","yes");
let  home126 = new home("126metr","2","no","yes","yes");
console.log(home135)
console.log(home85)
console.log(home110)
console.log(home126)