export interface Role {
    id: string;
    name: string;
    permissions: string[];
}

export interface User {
    birthDate?: string;
    businessId?: string;
    createdAt?: string;
    firstname: string;
    gender: string;
    id: string;
    lastname: string
    permissionsList: string[];
    phoneNumber: string
    roleName: string
}

