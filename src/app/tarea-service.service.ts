import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  private storageKey = 'todoList';
  private usernameKey = 'username';

  constructor() { }

  getTodoList(): Tarea[] {
    const todoListString = localStorage.getItem(this.storageKey);
    return todoListString ? JSON.parse(todoListString) : [];
  }

  saveTodoList(todoList: Tarea[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todoList));
  }

  getUsername(): string {
    return localStorage.getItem(this.usernameKey) || '';
  }

  setUsername(username: string): void {
    localStorage.setItem(this.usernameKey, username);
  }
}
