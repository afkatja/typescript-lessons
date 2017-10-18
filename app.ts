import { ToDo, CompleteStateChanger, todoState } from './TodoAppModel';
import { TodoService } from './DataAccess';
import { iIdGenerator, iHaveLength } from './models';

const todo: ToDo = {
  id: 1,
  name: 'learn ts',
  state: todoState.New
};

const service = new TodoService([]);
service.add(todo);

const todos = service.getAll();
todos.map(todo => console.log(`${todo.name} is ${todoState[todo.state]}`));
