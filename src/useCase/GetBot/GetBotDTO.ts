export interface IBot {
    id?: string;
    name: string;
}

 export interface IGetBotResponseDTO extends Array<IBot> { }