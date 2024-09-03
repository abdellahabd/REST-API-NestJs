import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './Schemas/book.schema';
import { CreateBookDto } from './Dto/Create-Book.dto';
import { UpdateBookDto } from './Dto/Update-Book.Dto';

@Controller('books')
export class BookController {
  constructor(private bookservice: BookService) {}
  @Get()
  getallBooks(): Promise<Book[]> {
    return this.bookservice.findAll();
  }
  @Post('create')
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookservice.createBook(book);
  }
  @Get(':id')
  async findByid(@Param('id') id: string): Promise<Book> {
    return this.bookservice.findByid(id);
  }
  @Put(':id')
  async UpdateById(
    @Param('id') id: string,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookservice.UpdateByid(id, book);
  }
}
