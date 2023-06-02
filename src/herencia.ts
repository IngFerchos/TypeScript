/**
 * Producto
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 * 
 * 
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

abstract class BasicData {
    constructor(
        public name: string,
        public desc: string,
        private created_at: Date,
        protected created_by: number,
    ) {}

    get fullYear() {
        return this.created_at.getFullYear()
    }

    get fullDesc() {
        return this.name + ' - ' + this.desc
    }

    abstract save(): void;
}

class Product extends BasicData {
    
    constructor(
        public stock: Number,
        public sku: Number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by)
    }

    override get fullDesc() {
        return 'Product ' + super.fullDesc
    }

    get createdBy () {
        return this.created_by
    }

    save(): void {
        console.log('save Product')
    }

}

class Category extends BasicData {

    public product: Product[] = []
    
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by)
    }

    addProduct(product: Product) {
        this.product.push(product)
    }

    override get fullDesc() {
        return 'Category ' + super.fullDesc
    }

    save(): void {
        console.log('save Category')
    }

}

let productOne = new Product(
    100, 
    1, 
    'phone', 
    'phone',
    new Date(),
    1
)

let category = new Category(
    'Celulares',
    '',
    new Date(),
    1
)

category.addProduct(productOne)

console.log(productOne, category)

console.log(productOne.fullDesc, category.fullDesc)

console.log(productOne.createdBy)

productOne.save
category.save