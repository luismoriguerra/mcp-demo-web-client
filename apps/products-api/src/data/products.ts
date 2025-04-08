import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with latest specs',
    price: 999.99,
    category: 'Electronics',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model smartphone with advanced camera',
    price: 699.99,
    category: 'Electronics',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Headphones',
    description: 'Wireless noise-canceling headphones',
    price: 199.99,
    category: 'Electronics',
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop'
  }
]; 