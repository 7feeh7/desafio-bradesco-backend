import { v4 } from "uuid";

export class Message {
    public readonly id?: string;
    
    public conversationId: string;
    public timestamp: Date;
    public from?: string;
    public to?: string;
    public text?: string;
    
    constructor(props: Omit<Message, 'id'>) {
        Object.assign(this, props);
        
        if (!this.id) {
            this.id = v4();
        }
    }
}