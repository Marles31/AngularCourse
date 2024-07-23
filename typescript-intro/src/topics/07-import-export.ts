import { Product, taxCalculator } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 50
    },
    {
        description: 'Ipad Air',
        price: 200
    }
];

const [total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total: ', total);
console.log('Tax: ', tax);