import { IsNotEmpty, IsNumber, IsOptional, MaxLength, MinLength } from 'class-validator';

export class ProductDto {
    @IsOptional() // Cho phép id không được truyền
    @IsNotEmpty() // Nếu có id, không được để trống
    id?: number;

    @IsNotEmpty()
    categoryId?: number;

    @IsNotEmpty()
    @MinLength(5, { message: 'Product name must be than 5 character'})
    productName?: string;

    @IsNotEmpty()
    @IsNumber()
    price?: number;
}