//write a program for example  of async await
    let handle = async()=>{
        let sucess = "";
        let promise = new Promise((resolve,reject)=>{
           if(sucess.length>=1){
               resolve(sucess)
           }
           else{
               reject("Server Time Out");
           }
        })
        promise.then(
            (resolve)=>{console.log(resolve);},
            (reject)=>{console.log(reject);}
        )
             
    };
handle()


//write a program for example of promise in javascript


//writa a program for example for localstorage and session storage

// let data ={
//     username:"Abelnesakumar",
//     password:123456789,
// };

// localStorage.setItem("user",data.username);
// localStorage.setItem("pass",data.password);
// console.log(localStorage.getItem("user"));
// console.log(localStorage.getItem("pass"));


//difference between local and session storage

// local and session storage is a web storage

// * local storage can stored maximum file size = 10MB
// * Session storage can stored maximum file size = 5MB



//let array1 = [1,2,3,4,5,6] and let us assign array2 = array1

// let array1 = [1,2,3,4,5,6]
// let array2 = array1;

// console.log(array1);
// console.log(array2);

// array1.push(10)
// console.log(array1);
// console.log(array2);


//write a program to explain what is deep copy and shallow copy
//DEEP COPY
// let array = [1,2,3,4,5,6]

// let array2 = JSON.parse(JSON.stringify(array));
// console.log(array);
// console.log(array2);

// array.push(90);
// console.log(array);
// console.log(array2);

//shallow copy

// let array1 = [1,2,3,4,5,6]
// let array2 = array1;

// console.log(array1);
// console.log(array2);

// array1.push(10)
// console.log(array1);
// console.log(array2);


//write a program for example of for, for in, for of , for each in javascript


// let arr = [1,2,3,4,5,6,7,"abel"];

//For loop

// for(let i =0 ; i< arr.length ; i++){
//     console.log(arr[i]);
// }

// //for in

// for(let i in arr){
//     console.log(arr[i]);
// }

// //for of

// for(let i of arr){
//     console.log(i);
// }

//for each 

// arr.forEach(loop);

// function loop(value , index){
//     console.log(index);
// }


//using switch cas write a program to right to vote based on age of
//person if age 18 can vote or below 18 cannot vote


// function voteAge(n){
//     switch(true){
//         case (n>18):
//             console.log("You can vote");
//             break;
//         case (n<=18):
//             console.log("you cannot vote");
//             break;
//     }
// }
// voteAge(18)


//write a program to calculate area of traingle of values provided
// by user with default parameter to the function 

/*function areaOfTriangle(a,b){
    let c = (a*b)/2;
    console.log(c);
    return c
}
areaOfTriangle(3,2)*/