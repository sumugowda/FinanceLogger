import { HasFormatter } from "../interfaces/Hasformatter";

export class ListTemplete{
    constructor(private container:HTMLUListElement){}

    render(item: HasFormatter, heading:string,pos:'start'|'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.appendChild(h4);

        const p = document.createElement ('p')
        p.innerText = item.format();
        li.append(p)

        if(pos === 'start'){
            this.container.prepend(li); 
        }else {
            this.container.append(li);
        }
    }
}