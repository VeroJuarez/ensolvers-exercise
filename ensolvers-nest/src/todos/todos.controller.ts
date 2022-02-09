import { Controller, Post, Body, HttpStatus, Get, Res, Param, Delete } from '@nestjs/common';
import { response } from 'express';

import { Todo } from './todos.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly TodosService: TodosService) {}

  @Post()
  async createTodo(@Res() response, @Body() todo: Todo) {
    const newTodo = await this.TodosService.createTodo(todo);
    return response.status(HttpStatus.CREATED).json({
      newTodo
    })
  }

  @Get()
  async fetchAll(@Res() response) {
    const todos = await this.TodosService.findAll();
    return response.status(HttpStatus.OK).json({
      todos
    })
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const todo = await this.TodosService.findOne(id);
    return response.status(HttpStatus.OK).json({
      todo
    })
  }

  @Delete('/:id')
  async removeById(@Res() response, @Param('id') id) {
    const deleteResult = await this.TodosService.removeOne(id);
    return response.status(HttpStatus.OK).json({
      deleteResult
    })
  }

}
