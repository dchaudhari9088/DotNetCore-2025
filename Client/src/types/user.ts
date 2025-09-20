export interface User  {
    id: number;
    displayName: string;
    email: string;
    token: string;
    image?: string;
};

export interface LoginCreds {
    email: string;
    password: string;
}

export interface RegisterCreds {
    displayName: string;
    email: string;
    password: string;
}