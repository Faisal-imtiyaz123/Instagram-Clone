export interface user{
    id:string
    username:string
    name:string
    bio:string
    image:string
    onboarded?:boolean

}

export interface DbUser extends user {
    _id:string
}

