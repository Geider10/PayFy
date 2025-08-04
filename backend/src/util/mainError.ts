export class MainError extends Error{
    constructor(
        public statusCode : number,
        public message : string
    ){
        super(message);
    }
    
}