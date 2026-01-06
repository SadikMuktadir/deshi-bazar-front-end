export interface IUser {
  userId: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  iat?: number;
  exp?: number;
}
