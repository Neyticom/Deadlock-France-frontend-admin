export enum UserRole {
  Admin = 'Administration',
  Dev = 'Développement',
  Mod = 'Modération'
}

export type USER = {
  username: string;
  email: string;
  role: UserRole;
  signUpDate: string;
};
