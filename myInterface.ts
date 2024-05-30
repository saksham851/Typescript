interface user{
    readonly dbId:number
    email:string 
    userId:number
    googleId?:string
    // startTrail:()=> string
      startTrail():string
      getCoupon(couponname:string,value:number):number
}

const sahil:user={dbId:22,email:"s@123.com",userId:2903,
startTrail:()=>{
    return "Trial started"
},
getCoupon:(name:"sak10",val:100)=>{
    return 10;
}
}