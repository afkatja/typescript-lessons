import { ToDo, CompleteStateChanger } from './TodoAppModel';
import { TodoService } from './DataAccess';
import { iIdGenerator, iHaveLength } from './models';

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

let service = new TodoService([]);
service.add(todo);

let todos = service.getAll();
todos.map(todo => console.log(`${todo.name} is ${todo.state}`));

function clone<T>(value: T): T {
  const serialized = JSON.stringify(value);
  return JSON.parse(serialized);
}

function totalLength<T extends iHaveLength>(value1: T, value2: T) {
  return value1.length + value2.length;
}

