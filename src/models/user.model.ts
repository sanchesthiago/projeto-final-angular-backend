export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    inclusionDate: Date | string;
    validRegistration: boolean;
    img: string;
}