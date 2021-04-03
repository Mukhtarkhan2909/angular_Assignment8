export interface GroupDetails {
  id: number;
  name: string;
  usersNumber: number;
}
export const groups: GroupDetails[] = [
  { id: 1, name: 'group1', usersNumber: 30 },
  { id: 2, name: 'group2', usersNumber: 40 },
  { id: 3, name: 'group3', usersNumber: 20 },
  { id: 4, name: 'group4', usersNumber: 50 }
];
