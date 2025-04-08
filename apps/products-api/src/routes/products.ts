import express, { Request, Response } from 'express';
import { products } from '../data/products';

const router = express.Router();

// GET all products
router.get('/', (req: Request, res: Response) => {
  res.json(products);
});

// GET product by ID
router.get('/:id', (req: Request, res: Response) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

export default router; 