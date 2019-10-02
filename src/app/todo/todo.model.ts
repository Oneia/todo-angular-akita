import { ID, guid } from '@datorama/akita';

export interface Todo {
  id: ID;
  complete: boolean;
  task: string;
}

export function createTodo(index?: number) {
  return {
    id: guid(),
    complete: false,
    task: `Task ${index}` ,
  } as Todo;
}

export const ENTITIES = [...Array(5).keys()].map((index) => createTodo(index));
