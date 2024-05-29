function addTwo(num:number)  //It can't accept any type value
{
    //And we have not to do any conditional checking..
   // num.toUpperCase();//not allowed in typescript
    
    return  num + 2 ;
    //return "hello" //how can we return more accurate value
}

//In case of variable it can manageor infer by itself so it is not compulsory to add annotaion 
//all the time but quite important/compulsory for functions...

let loginUser=(name:string,email:string,ispaid:boolean=false)=>
{

}

function signupUser (name:string,email:string,isPaid:boolean)
{


}

addTwo(5) 
signupUser("saksham","sak@123",true);
loginUser("S","S@123")
export {}