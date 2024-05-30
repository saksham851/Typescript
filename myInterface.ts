interface user{
    readonly dbId:number
    email:string 
    userId:number
    googleId?:string
    // startTrail:()=> string
      startTrail():string
      getCoupon(couponname:string,value:number):number
}

//Re-opening of the interface
interface user{
    gitToken:string
}

interface Admin extends user{
   role:"admin"|"Ta"|"learners"
}


const sahil:Admin={dbId:22,email:"s@123.com",userId:2903,
role:"admin",
gitToken:"github",
startTrail:()=>{
    return "Trial started"
},
getCoupon:(name:"sak10",val:100)=>{
    return 10;
}
}