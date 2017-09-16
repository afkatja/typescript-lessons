export interface ToDo {
  id: number;
  name: string;
  completed?: boolean;
  state: todoState;
}

export enum todoState {
  New = 1,
  Active,
  Completed,
  Deleted
}