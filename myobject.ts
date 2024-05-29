const User={
    name:"saksham",
    email:"sak@123",
    isActive:true
}

function CreateUser({name:string,ispaid:boolean}){}

//CreateUser({name:'saksham',ispaid:false,email:"h@h.com"}) //give error coz function won't
//accept 3 argument

// Bad behaviour of object in js it will work

let Newuser={name:'saksham',ispaid:false,email:"h@h.com"};
CreateUser(Newuser);

function createCourse():{name:string,price:number}{
    return {name:'React js',price:3999}
}



export{}