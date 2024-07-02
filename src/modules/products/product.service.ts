import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getProducts() {
        return 'GET LIST PRODUCT';
    }

    createProduct() {
        return 'CREATE PRODUCT';
    }

    detailProduct(): string {
        return 'Detail Product';
    }

    updateProduct(): string {
        return 'UPDATE PRODUCT';
    }

    deleteProduct(): string {
        return 'DELETE PRODUCT';
    }
}