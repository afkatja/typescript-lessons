export interface ToDo {
  id: number;
  name: string;
  completed?: boolean;
  state: todoState;
}

enum todoState {
  New = 1,
  Active,
  Completed,
  Deleted
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

export class CompleteStateChanger extends TodoStateChanger {
  constructor() {
    super(todoState.Completed);
  }
  canChangeState(todo: ToDo): boolean {
    return !!todo;
  }
}