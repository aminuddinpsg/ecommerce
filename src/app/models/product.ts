export class Product {

    public id: number;
    public name: string;
    public description: string;
    public quantity: number;
    public price: number;
    public source: string;
    public photo: string;

    public constructor(id: number, name: string, description: string, quantity: number, price: number, source: string, photo: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.source = source;
        this.photo = photo;

    }


}
