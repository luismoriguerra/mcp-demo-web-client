import express, { Request, Response } from 'express';

const router = express.Router();

interface PurchaseRequest {
  productId: string;
  quantity: number;
  customerName: string;
}

// POST /purchase endpoint
router.post('/', async (req: Request<{}, {}, PurchaseRequest>, res: Response) => {
  try {
    const { productId, quantity, customerName } = req.body;

    console.log(JSON.stringify(req.body, null, 2));

    // Validate request body
    if (!productId || !quantity || !customerName) {
      console.error('Missing required fields:', req.body);
      return res.status(400).json({
        error: 'Missing required fields: productId, quantity, and customerName are required'
      });
    }

    if (quantity <= 0) {
      console.error('Invalid quantity:', quantity);
      return res.status(400).json({
        error: 'Quantity must be greater than 0'
      });
    }

    // For now, return a success message
    return res.status(200).json({
      message: 'Purchase successful',
      data: {
        productId,
        quantity,
        customerName,
        purchaseDate: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Purchase error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
});

export default router; 