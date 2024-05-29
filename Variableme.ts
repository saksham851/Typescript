let greeting:string="Hello saksham";
console.log(greeting);

//number
let userId:number =334455;
//Is in not to always use :number annotaion if it it too obivous.. 

//boolean
let isloggedIn:boolean=false;

//any

//Typescript won't know which value will come in future in this variable is put as any..
//let hero;

let hero :string;

function getHero(){
    //return true; //error in compilation in typescript
    return "ramesh"; //correctly working
}

hero=getHero();

export {}