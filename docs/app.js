// // interface
// interface IsPerson{
//     name:string;
//     age: number;
//     speak(a:string):void;
//     spend(a:number):number;
// } to define the structure  of a person object.
import { ListTemplete } from './classes/ListTemplete.js';
import { invoice } from './classes/invoice.js';
import { payments } from "./classes/payments.js";
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
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List templete instance
const ul = document.querySelector('ul');
const list = new ListTemplete(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, (amount.valueAsNumber)];
    let doc;
    if (type.value === 'payment') {
        doc = new payments(...values);
    }
    else {
        doc = new invoice(...values);
    }
    // console.log(doc); 
    list.render(doc, type.value, 'end');
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
