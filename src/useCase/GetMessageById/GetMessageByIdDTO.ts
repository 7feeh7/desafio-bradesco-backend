export interface IBot {
    id?: string;
    conversationId?: string;
    timestamp?: Date;
    from?: string;
    to?: string;
    text?: string;
}

 export interface IGetMessageByIdResponseDTO extends IBot { }