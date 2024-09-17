import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../Schemas/book.schema';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly author: string;
  @IsOptional()
  @IsEnum(Category, { message: 'please enter a correct category' })
  readonly category: Category;
}
