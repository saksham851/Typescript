//Order inside the array really matters -- tuples

// const User:(number|string)[]=[1,"sp"];

let tUser:[string,number,boolean]

// tUser=["sp",27,true]  //correct order

// tUser=["sp",true,46]  //wrong order


type User =[number,string]

const  newUser:User=[112,"example"]

//but in tuple u can mordify value at current index
newUser[1]="sp@123"
// newUser.push(true)