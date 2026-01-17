export interface IUser {
  userId: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  iat?: number;
  exp?: number;
}

export interface IProduct {
  _id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  category?: 'Phone' | 'Computer';
}
