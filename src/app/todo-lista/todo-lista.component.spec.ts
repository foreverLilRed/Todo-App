import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListaComponent } from './todo-lista.component';

describe('TodoListaComponent', () => {
  let component: TodoListaComponent;
  let fixture: ComponentFixture<TodoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
