// let score: number| string  =33;

// score=44;

// score="90";

// type User={
//     name:string;
//     id:number
// }

// type Admin={
//     Username:string;
//     id:number
// }

// let sak: User | Admin  ={name:"saksham",id:12345}

//in future saksham wanna change his name to usename

// let sak={username:"sakku",id:12345}

function getDbId(id: number | string )
{
    if(typeof id ==="string")
        {
            id.toLowerCase()
        }
}


//Array

const data1:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
// const data3:number[] | string[]=["1","2",4] //Error coz its either all string or either all number
const data4:(number|string)[]=[1,2,"3"]  //can use mix value in array //prefect solution wrap it over ()
const data5:(any)[]=[1,2,"3",true]

// let pi:3.14=3.14;
// pi=3.145

// let seatAllotment:"aisle"|"middle"|"window"

// seatAllotment="aisle"
// seatAllotment="crew" //not allowed 