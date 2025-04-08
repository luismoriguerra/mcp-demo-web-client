import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with latest specs',
    price: 999.99,
    category: 'Electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model smartphone with advanced camera',
    price: 699.99,
    category: 'Electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Headphones',
    description: 'Wireless noise-canceling headphones',
    price: 199.99,
    category: 'Electronics',
    inStock: false
  }
]; 