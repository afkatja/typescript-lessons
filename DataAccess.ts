import { ToDo } from './ToDoAppModel';
import { iIdGenerator, iHaveLength } from './models';

interface iTodoService {
  getById(todo: number): ToDo | null;
  getAll(): ToDo[];
  add(todo: ToDo): ToDo;
  delete(todo: ToDo): void;
}

export class TodoService implements iTodoService, iIdGenerator {
  newId: number;
  constructor(private todos: ToDo[]) { }
  
  delete(todo: ToDo): void {
    const itemToDelete = this.getById(todo.id);
    if (itemToDelete) {
      const indexToDelete = this.todos.indexOf(itemToDelete);
      this.todos.splice(indexToDelete, 1);
    }  
  }

  getAll(): ToDo[] {
    const clone = JSON.stringify(this.todos);
    return JSON.parse(clone);
  }

  getById(id: number): ToDo | null {
    const todoById = this.todos.filter((todo, i) => todo.id === id);
    if (todoById.length) {
      return todoById[0];
    }
    return null;
  }

  add(todo: ToDo) {
    todo.id = this.newId;
    this.todos.push(todo);
    return todo;
  }
}