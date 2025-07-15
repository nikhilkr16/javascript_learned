


// console.log("NIKHIL KUMAR");
// let dfgAabc=10;
// console.log(dfgAabc);
    


// STRING
// let a= "nik"
// let b="kr"
// FullName = ` ${a} ${b} it me `

// FullNameS = " ${a} ${b} it me "
// console.log(FullName);
// console.log(FullNameS);

// let a= "Nikhil"
// let b="kumar"

// let fullName =a.concat(b); 
// console.log(fullName);

// let fullName2 =a.toUpperCase();
// console.log(fullName2);

// let desc=`I'm ${a} ${b} and i'm a good boy`
// console.log(desc.toLowerCase());

// const favSinger=['Arijit','Atif','Shreya','Shreya Ghosal']
// console.log(favSinger[0]);

// const favNum=[1,2,3,4]
// const mixedArr=[1,2,3,favNum,'nikhil',[1,2,3,4,["Arjit","Avi","sin"]],true,false]
// console.log(mixedArr[5][4][2]); //access the array from nexted array

// for(let i=0;i<mixedArr.length;i++){
//     console.log(mixedArr[i]);   // access all the array elements in list
// }




// let fruits = ['apple', 'banana', 'cherry', 'date'];
// let moreFruits = "orange";
// console.log(fruits.concat(moreFruits) );
// console.log(fruits.includes("banana"));

// console.log(fruits.shift()); 
// console.log(fruits);

// moreMoreFruits= ['carrot', 'broccoli']
// console.log(fruits.concat(moreMoreFruits));
// console.log(fruits.concat([["mango","pineapple"]]));


// console.log(fruits.sort());
// console.log(fruits.reverse());

// fruits[2]="kiwi";
// console.log(fruits);


// console.log(fruits.slice(1,3));

// console.log(fruits.unshift("grapes","coconut"));
// console.log(fruits);

// console.log(fruits.unshift(["grapes","coconut"]));
// console.log(fruits);

// object
// let car={
//     type:"sedan",
//     color:"red",
//     price:100000,
//     isElectric:false,
//     features:["AC","music","navigation"]
// }

// console.log(car.type);
// console.log(car["color"]);
// console.log(car.features.includes("AC"));

// car.price=200000;
// console.log(car);

// car["wheels"]=4;
// console.log(car);

// console.log(delete car.price);
// console.log(car);




// const naam=(x,p)=>{
//     return x*p;
// }

// console.log(naam(10,20));

// const showCallFunc(fn){
//     const value=69;
//     fn(value);
// }

// fn(value);

// let  lib =(a,b)=>{
//    let sum=(a,b)=>(a+b);
//    let multi=(a,b)=>(a*b);
//    return [sum(a,b),multi(a,b)];
// }
// console.log(lib(8,5));

// const person={
//     name:"nikhil",
//     age:20,
//     city:"delhi",   
// }

// const personMoreDetail={
//     college:"IIT",
//     branch:"CSE",
//     year:2025,
// }

// console.log({...person,...personMoreDetail});


// let a= [1,2,3,4,5,9,10]
// let [b,c,d,e,f,g,h]=a;
// console.log(b,c,d,e,f,h);


// const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// let [fru1,fru2,...otherFru]=fruits;

// console.log(fru1,fru2,otherFru);



// const person = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// let {name,age,address:{city,country}}=person;
// console.log(name,age,city,country);


// const books = [
//     { title: 'Book One', author: 'Author One', year: 2001 },
//     { title: 'Book Two', author: 'Author Two', year: 2002 },
//     { title: 'Book Three', author: 'Author Three', year: 2003 }
// ];

// let [book1,book2,book3]=books;
// let{title}=book2;
// let{author}=book3;
// console.log(` title of the second book  is ${title} and the author of the third book is ${author}`);

// const add = (a,b)=>a+b;
// console.log(add(10,20));

// const greet=()=>{return "hello world"}
// console.log(greet());

// const square= (x)=>x*x;
// console.log(square(5));



// const person = {
//     name: 'Alice',
//     sayName: function() {
//         setTimeout(()=> {
//             console.log(this.name);
//         }, 1000);
//     }
// };

// person.sayName();


// function user(naam,age,work){
//     return {naam,age,work,intro: greet=()=>{
//         console.log(`Hello, my name is ${naam} and I am ${age} years old. I work as a ${work}.`);
//     }
// }
// }

// let user1=user("Nikhil",21,"Software Engineer");
// console.log(user1.intro());


// const books = [
//     { bookName: 'Book1', genre: 'Fantasy', publishYear: 2001 },
//     { bookName: 'Book2', genre: 'Science Fiction', publishYear: 2002 },
//     { bookName: 'Book3', genre: 'Fantasy', publishYear: 2003 },
//     { bookName: 'Book4', genre: 'Mystery', publishYear: 2004 },
//     { bookName: 'Book5', genre: 'Science Fiction', publishYear: 2005 },
//     { bookName: 'Book6', genre: 'Fantasy', publishYear: 2006 },
//     { bookName: 'Book7', genre: 'Romance', publishYear: 2007 },
//     { bookName: 'Book8', genre: 'Mystery', publishYear: 2008 }
// ];

// let userbooks=books.filter( (bo)=>bo.publishYear<2005 &&bo.genre==="Fantasy");
// console.log(userbooks);



// const numb=[1,2,3,4,5,6,7,8,9,10];
// let myNum=numb.map((step1)=>step1*2).map((step2)=>step2+10).map((step3)=>step3/2);

// console.log(myNum);



// const shoppingCart = [
//     { itemName: 'Apple', price: 1.2 },
//     { itemName: 'Banana', price: 0.5 },
//     { itemName: 'Orange', price: 0.8 },
//     { itemName: 'Milk', price: 1.5 },
//     { itemName: 'Bread', price: 2.0 }
// ];

// //total price of the shopping cart
// let totalPrice=shoppingCart.reduce((i,money)=>i+money.price,0);
// console.log(totalPrice);



// const products = [
//     { name: "T-shirt", price: 500, category: "clothing", inStock: true },
//     { name: "Jeans", price: 1200, category: "clothing", inStock: false },
//     { name: "Shoes", price: 2500, category: "footwear", inStock: true },
//     { name: "Hat", price: 300, category: "clothing", inStock: true },
//     { name: "Watch", price: 3500, category: "accessories", inStock: false },
//     { name: "Socks", price: 150, category: "clothing", inStock: true },
//     { name: "Sandals", price: 900, category: "footwear", inStock: true },
//     { name: "Belt", price: 700, category: "accessories", inStock: true },
//   ];
// //jo stock mai hai uska price 50% off then total price of the stock
//   let final=products.filter((stock)=>stock.inStock==true).map((discount)=>discount.price*0.5).reduce((sum,total)=>sum+total,0);

// console.log(final);


// const ages=[10,20,30,40,50,60,70,80,90,100];
// let older=ages.filter((old)=>old>50);
// console.log(older);

// const numb=[2,3,4,5];
// //120 lalo
// let target=numb.reduce((i,total)=>i*total,1);
// console.log(target);


// console.log("Start...");
// let getUserDB=(name,callback)=>{
//     setTimeout(()=>{
//         console.log(`Getting User Data...`);

//         console.log(`User DB created with ${name}`);
//         callback(name);
//     },1000);

// }

// let getUserHobbies=(name,callback)=>{
//     setTimeout(()=>{
//         console.log(`Getting User Hobbies...`);
        
//         callback([`${name} likes to play cricket`,`${name} likes to play football`]);
//     },2000);
// }

// getUserDB("Nikhil",(name)=>{
//     getUserHobbies(name,(hobbies)=>{
//         console.log(hobbies);
//     });
// });

// setTimeout(()=>{
// console.log("End...");
// },4000);




// advanced callback


// console.log("Start...");
// let getUserDB=(name,callback)=>{
//     setTimeout(()=>{
//         console.log(`Getting User Data...`);
//     },2000);

//     setTimeout(()=>{
//         console.log(`User DB created with name ${name}`);
//         callback(name);
//     },3000);
    

// }

// let getUserHobbies=(name,callback)=>{
//     setTimeout(()=>{
//         console.log(`Getting User Hobbies...`);
//     },4000);
//     setTimeout(()=>{
//         callback([`${name} likes to play cricket`,`${name} likes to play football`]);
//     },5000);

// }

// getUserDB("Nikhil",(name)=>{
//     getUserHobbies(name,(hobbies)=>{
//         console.log(hobbies);
//     });
// });

// setTimeout(()=>{
// console.log("End...");
// },9000);

// let tasks=["task1","task2","task3","task4","task5"];
// tasks.forEach(task => {
//     console.log("Task:", task);
//   });
  
// let users = [
//     { name: "Nikhil", age: 21 },
//     { name: "Ankit", age: 25 },
//     { name: "Ravi", age: 19 }
//   ];
  
//   users.forEach(user => {
//     console.log(`${user.name} is  ${user.age}  years old.`);
//   });
  
// let p = new Promise((resolve, reject) => {
//     let success = false;
  
//     if (success) resolve("Data mil gaya");
//     else reject("Error aaya");
//   });


//   p.then(data => {console.log(data);}).catch(err => {console.log(err);});

// async function getData() {
//     try {
//       let res = await fetch("https://api.github.com/users/nikhil");
//       let data = await res.json();
//       console.log(data);
//     } catch (err) {
//       console.log("Error:", err);
//     }
//   }
  
//   getData();
  

// console mai read karna 
// fetch('demDFBBNGFo.txt')
// .then( (response)=>{

//     if(!response.ok) throw Error( response.statusText);

//     return response.text() })
//     .then(data=> console.log(data))
//     .catch(error=> console.log(error));




// html mai dalna
// let readData=document.getElementById("txt");

// async function getText(){

//     try{
        

//     let uthaoData=await fetch("demo.txt"); //fetch the data from the file
//     if(!uthaoData.ok) throw Error(uthaoData.statusText); //if the data is not ok then throw an error

//     let data= await uthaoData.text(); //convert the data to text
//     readData.textContent=data; //display the data in the html


//     }catch(error){
//         console.log(error);
//     }
// };

// getText();



// let readData=document.getElementById("txt");
// async function getUser(){

//     try{
//         let  res =await fetch("demo.json"); //fetch the data from the file
//         if(!res.ok) throw Error(res.statusText); //if the data is not ok then throw an error
//         let data =await res.json(); //convert the data to json
//         let intro =`My name is ${data.name} and I am ${data.age} years old and I live in ${data.city}`; //create a string with the data
//         return readData.textContent=intro; //display the data in the html
//     }catch(error){
//         console.log(error);
//     }

// }

// getUser()
