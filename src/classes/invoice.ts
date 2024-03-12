import { HasFormatter } from "../interfaces/Hasformatter";
export class invoice implements  HasFormatter{
    // client: string;
    // details: string;
    // amount: number;
    
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){
        // this.client = c;
        // this.details = d; 
        // this.amount = a;
    }

    format(){
        return `${this.client} owes Rs ${this.amount} for ${this.details}.`;
    }
}

// const anchor = document.querySelector('a');

// console.log(anchor); // <a href="https://www.google.com/">Google</a>

// // ! can be given after the queryselector to avoid the error of it may be a null value 


// const form = document.querySelector('form')!; or

// classes