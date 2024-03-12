
// // interface
// interface IsPerson{
//     name:string;
//     age: number;
//     speak(a:string):void;
//     spend(a:number):number;
// } to define the structure  of a person object.

import { ListTemplete } from './classes/ListTemplete.js';
import { invoice } from './classes/invoice.js';
import {payments}  from "./classes/payments.js";
import { HasFormatter } from './interfaces/Hasformatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new invoice('yoshi','webworok',260);
// docTwo = new payments('mario','webwork',460);

// let docs:HasFormatter[]= [];
// docs.push(docOne);
// docs.push(docTwo);

// const invOne = new invoice('mario','work on website',1000);
// const invTwo = new invoice('luda','work on website',2000);
// // console.log(`Invoice One : ${invOne.format()}`); 
// // console.log(`Invoice Two : ${invTwo.format()}`); 

// let Invoice: invoice[] = [];
// Invoice.push(invOne);
// Invoice.push(invTwo);
// console.log(Invoice)



const form = document.querySelector('.new-item-form') as HTMLFormElement; 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector( '#amount' ) as HTMLInputElement;

// List templete instance
const ul = document.querySelector('ul')!;
const list = new ListTemplete(ul)
form.addEventListener('submit', (e:Event)=>{
    
    e.preventDefault();
    let values:[string, string, number]
    values =[tofrom.value,details.value,(amount.valueAsNumber)]
    let doc:HasFormatter;
    if(type.value === 'payment'){
        doc = new payments(...values);
    }
    else{
        doc = new  invoice(...values);
    }

    // console.log(doc); 

    list.render(doc,type.value,'end');
});

// // Generics
// const addUID = <T>(obj: T)=>{
//     let uid = Math.floor(Math.random()*100);
//     return {...obj, uid};
// }
// let docOne = addUID({name:'yosho', age:40});
// // let dopcTwo = addUID('hello');
// console.log(docOne);

// interface Resource<T>{
//     uid:number;
//     resourceName: string;
//     data:T;
// }
// const docThree: Resource<object> = {
//     uid :23,
//     resourceName: "CPU",
//     data:{ name:'Intel' }
// }