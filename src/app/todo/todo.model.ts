import { ID, guid } from '@datorama/akita';

export interface Todo {
  id: ID;
  complete: boolean;
  task: string;
}

export function createTodo() {
  return {
    id: guid(),
    complete: false,
    task: '',
  } as Todo;
}

export const ENTITIES = [...Array(10).keys()].map(() => createTodo())