import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './Schemas/book.schema';
import { CreateBookDto } from './Dto/Create-Book.dto';
import { UpdateBookDto } from './Dto/Update-Book.Dto';

import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('books')
export class BookController {
  constructor(private bookservice: BookService) {}

  @Get()
  getallBooks(@Query() query: ExpressQuery): Promise<Book[]> {
    return this.bookservice.findAll(query);
  }

  @Post('create')
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookservice.createBook(book);
  }

  @Get(':id')
  async findByid(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return this.bookservice.findByid(id);
  }

  @Put(':id')
  async UpdateById(
    @Param('id') id: string,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookservice.UpdateByid(id, book);
  }

  @Delete(':id')
  async DeleteById(@Param('id') id: string): Promise<Book> {
    return this.bookservice.DeleteByid(id);
  }
}
