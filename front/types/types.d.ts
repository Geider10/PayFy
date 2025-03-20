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

export interface UserInfo {
    userEmail: string;
    userLastName: string;
    userName: string;
    _id?: string
}
export interface UserProf extends UserInfo{
    userDNI : string,
}