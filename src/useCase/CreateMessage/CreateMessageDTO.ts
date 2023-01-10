export interface ICreateMessageRequestDTO {
    id?: string;

    conversationId: string;
    timestamp: Date;
    from: string;
    to: string;
    text: string;
}

export interface ICreateMessageResponseDTO extends ICreateMessageRequestDTO { }