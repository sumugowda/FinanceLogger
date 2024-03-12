import { HasFormatter } from "../interfaces/Hasformatter";

export class payments implements  HasFormatter{ 
    constructor(
        readonly recipient:string,
        private details:string,
        public amount:number
    ){}

    format(){
        return `${this.recipient} isowed Rs ${this.amount} for ${this.details}.`;
    }
}