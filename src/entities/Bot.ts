import { v4 } from "uuid";

export class Bot {
    public readonly id?: string;
    public name?: string
    
    constructor(props: Omit<Bot, 'id'>) {
        Object.assign(this, props);
        
        if (!this.id) {
            this.id = v4();
        }
    }
}