import { Injectable } from '@nestjs/common';
import { Task } from './task';
@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Wash the dishes', completed: false },
    { id: 2, description: 'Clean the bathroom', completed: true },
  ];
  getAll() {
    return this.tasks;
  }
  getById(id: Number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }
  create(task: Task) {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;
    this.tasks.push(task);
    return task;
  }
  update(task: Task) {
    const taskArray = this.getById(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
      return taskArray;
    }
  }
  delete(id: Number) {
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
    let messageSucefull = 'Apagado com sucesso';
    return messageSucefull;
  }
}
