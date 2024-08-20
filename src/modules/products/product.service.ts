import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

    private products: Product[] = [
        { id: 1, categoryId: 2, price: 80000, productName: 'Keyboard' },
        { id: 2, categoryId: 3, price: 95600, productName: 'Mouse' },
    ]

    getProducts(): Product[] {
        return this.products;
    }

    createProduct(): string {
        return 'CREATE PRODUCT';
    }

    detailProduct(id: number): Product {
        return this.products.find(item => item.id === Number(id));
    }

    updateProduct(): string {
        return 'UPDATE PRODUCT';
    }

    deleteProduct(): string {
        return 'DELETE PRODUCT';
    }
}