export interface Debt {
    company : {
        serviceId : string,
        name : string
    },
    client_id : string,
    client_description : string,
    due_date : string,
    amount : number,
    invoice_id : string,
    invoice_title : string
}
type StatusDebt = 'approved' | 'pending' | 'rejected'

export type CreateDebt = {
    userId : string,
    invoiceId : string,
    paymentStatus : StatusDebt
}
export interface UserInfo {
    userEmail: string;
    userLastName: string;
    userName: string;
    _id?: string
}
export interface UserProf extends UserInfo{
    userDNI : string,
}

export interface Card {
    userId : string,
    cardId : string,
    lastFord : string,
    brand? : string
}
export type CreateCard = {
    userId : string
    cardHolderName : string,
    cardNumber : string,
    cardType : string,
    cardExpirationDate : string
}

export type Payment ={
    _id : string,
    userId : string,
    invoiceId : Debt,
    paymentStatus : StatusDebt,
    paymentDateCreated : string
}