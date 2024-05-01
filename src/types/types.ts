export interface UserType {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm?: string;
  id?: number;
  [key: string]: string | number | undefined;
}

export interface ProfileType extends UserType {
  city: string;
  status: string;
  avatar: string;
  background: string;
}

export type LoginType = {
  email: string;
  password: string;
  [key: string]: string;
};


