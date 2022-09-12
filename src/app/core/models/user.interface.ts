import { RoleInterface } from "./role.interface";

export interface UserInterface{
    id: string;
    name: string;
    age: string;
    rols: RoleInterface[];
}