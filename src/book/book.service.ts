import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './Schemas/book.schema';
import mongoose from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: mongoose.Model<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find();
  }
  async createBook(book: Book): Promise<Book> {
    const res = await this.bookModel.create(book);
    return res;
  }
  async findByid(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);
    if (!book) {
      throw new NotFoundException('book not found');
    }
    return book;
  }
  async UpdateByid(id: string, editedBook: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, editedBook, {
      new: true,
      runValidators: true,
    });
  }
  async DeleteByid(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
