import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Post()
    createProduct() {
        return this.productService.createProduct();
    }

    @Get('/:id')
    detailProduct(): string {
        return this.productService.detailProduct();
    }

    @Put('/:id')
    updateProduct(): string {
        return this.productService.updateProduct();
    }

    @Delete('/:id')
    deleteProduct(): string {
        return this.productService.deleteProduct();
    }
}