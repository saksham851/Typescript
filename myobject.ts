const User={
    name:"saksham",
    email:"sak@123",
    isActive:true
}

function CreateUser({name:string,ispaid:boolean}){}

//CreateUser({name:'saksham',ispaid:false,email:"h@h.com"}) //give error coz function won't
//accept 3 argument

// Bad behaviour of object in js it will work

// let Newuser={name:'saksham',ispaid:false,email:"h@h.com"};
// CreateUser(Newuser);

// function createCourse():{name:string,price:number}{
//     return {name:'React js',price:3999}
// }

//Type aliases example

// type User={
//     name:string;
//     email:string;
//     isActive:boolean;
// }

// function CreateUsers(user:User):User{
//     return{name:"",email:"",isActive:true}
// }
// CreateUsers({name:"",email:"",isActive:true});

//READ ONLY AND OPTIONAL

type User={
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean
    creditCard?:number  //optional
}

let myUser:User={
    _id:"1234",
    name:"sak",
    email:"s@s",
    isActive:false
}

//mixing of types
type cardNumber={
    cardnumber:string
}

type cardDate={
    carddate:string
}

type cardDetails=cardNumber & cardDate  &{
    cvv:number
}

myUser.email="sak@123";

export{}