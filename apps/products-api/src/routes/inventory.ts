import { Router, Request, Response } from 'express';
import { products } from '../data/products';

const router = Router();

// GET /inventory - Get current inventory status
router.get('/', async (req: Request, res: Response) => {
  try {
    const inventory = products.map(product => ({
      productId: product.id,
      name: product.name,
      quantity: product.inStock ? Math.floor(Math.random() * 100) + 50 : 0 // Random stock for demo
    }));

    res.json({
      success: true,
      data: inventory
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch inventory'
    });
  }
});

export default router; 