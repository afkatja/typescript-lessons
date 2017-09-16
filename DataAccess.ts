import { ToDo } from './ToDoAppModel';

export interface iTodoService {
  getById(todo: number): ToDo | null;
  getAll(): ToDo[];
  add(todo: ToDo): ToDo;
  delete(todo: ToDo): void;
}