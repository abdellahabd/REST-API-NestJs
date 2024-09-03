import { Category } from '../Schemas/book.schema';

export class CreateBookDto {
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly author: string;
  readonly category: Category;
}
