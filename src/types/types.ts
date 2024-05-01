export interface UserType {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm?: string;
  id?: number;
  [key: string]: string | number | undefined | CardData[];
}

export interface ProfileType extends UserType {
  city: string;
  status: string;
  avatar: string;
  background: string;
  posts?: CardData[];
}

export type LoginType = {
  email: string;
  password: string;
  [key: string]: string;
};

export interface CardData {
  image: string;
  tag: string;
  title: string;
  description: string;
  time?: string;
  [key: string]: string | number | undefined;
}
