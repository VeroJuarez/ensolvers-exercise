import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

import { Todo } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private repo: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.repo.findOne(id);
  }

  createTodo(todo: Todo): Promise<Todo> {
    return this.repo.save(todo);
  }

  removeOne(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
