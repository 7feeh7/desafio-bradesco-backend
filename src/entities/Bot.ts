import { v4 } from "uuid";

export class Bot {
    public readonly id: string;
    public name: string
    
    constructor(props: Omit<Bot, 'id'>, id?: string) {
        Object.assign(this, props);

        const teste = v4();
        console.log("aqui", teste)
        
        if (!id) {
            this.id = teste;
        }
    }
}