import { Product } from './product';

export class CartItem {

    public id: number;
    public product: Product;
    public requiredQuantity: number;

    public constructor(id: number, product: Product, requiredQuantity: number) {
        this.id = id;
        this.product = product;
        this.requiredQuantity = requiredQuantity;
    }

}
