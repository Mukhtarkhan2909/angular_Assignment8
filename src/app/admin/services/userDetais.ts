export interface UserDetails {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const users: UserDetails[] = [
  { id: 1, name: 'user1', email: 'user1@gmail.com', password: 'user1Password' },
  { id: 2, name: 'user2', email: 'user2@gmail.com', password: 'user2Password' },
  { id: 3, name: 'user3', email: 'user3@gmail.com', password: 'user3Password' },
  { id: 4, name: 'user4', email: 'user4@gmail.com', password: 'user4Password' }
];
