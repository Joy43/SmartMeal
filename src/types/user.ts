export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    isBlocked: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  