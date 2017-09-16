const todo: ToDo = {
  id: 1,
  name: 'learn ts',
  get state() {
    return this.state;
  },
  set state(newState) {
    this.state = newState;
  }
};

class TodoService implements iTodoService, iIdGenerator {
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

abstract class TodoStateChanger {
  constructor(private newState: todoState) { }
  abstract canChangeState(todo: ToDo): boolean;
  changeState(todo: ToDo) {
    if (this.canChangeState(todo)) {
      todo.state = this.newState;
    }
    return todo;
  }
}

function clone<T>(value: T): T {
  const serialized = JSON.stringify(value);
  return JSON.parse(serialized);
}

function totalLength<T extends iHaveLength>(value1: T, value2: T) {
  return value1.length + value2.length;
}

class CompleteStateChanger extends TodoStateChanger {
  constructor() {
    super(todoState.Completed);
  }
  canChangeState(todo: ToDo): boolean {
    return !!todo;
  }
}