function addTwo(num:number):number  //It can't accept any type value
{
    //And we have not to do any conditional checking..
   // num.toUpperCase();//not allowed in typescript
    
    return  num + 2 ;
    //return "hello" //how can we return more accurate value
}

//In case of variable it can manageor infer by itself so it is not compulsory to add annotaion 
//all the time but quite important/compulsory for functions...

let loginUser=(name:string,email:string,ispaid:boolean=false)=>{}
function signupUser (name:string,email:string,isPaid:boolean){}

// function getValue(myVal:number):Boolean //this is misconception what it returning two types
// //bool or string at the same time 
// {
//     if(myVal>5)
//         {
//             return true;
//         }
//         return "200 ok";
// }

//using of map method
const heros=['thor','spiderman','batman']
//const heros=[1,2,3]
heros.map((hero):string=>{      //:string tells us that return type will be string cant be number
  return `hero is ${hero}`
})


function consoleError(errormsg:string):void
{
    console.log(errormsg);
}

function handelError(errormsg:string):never
{
  throw new Error(errormsg);
}

addTwo(5) 
signupUser("saksham","sak@123",true);
loginUser("S","S@123")

export {}