import { Router, Request, Response } from 'express';

const router = Router();

// GET /orders - Retrieve all orders
router.get('/', async (req: Request, res: Response) => {
  try {
    // TODO: Replace with actual database query
    const mockOrders = [
      {
        id: '1',
        customerName: 'John Doe',
        products: [
          { id: '1', name: 'Gaming Laptop', quantity: 2, price: 1299.99 },
          { id: '3', name: 'Wireless Mouse', quantity: 1, price: 49.99 }
        ],
        totalAmount: 2649.97,
        status: 'completed',
        createdAt: '2024-03-20T10:30:00Z'
      },
      {
        id: '2',
        customerName: 'Jane Smith',
        products: [
          { id: '4', name: 'Mechanical Keyboard', quantity: 1, price: 159.99 }
        ],
        totalAmount: 159.99,
        status: 'pending',
        createdAt: '2024-03-21T08:15:00Z'
      },
      {
        id: '3',
        customerName: 'Alice Johnson',
        products: [
          { id: '2', name: 'Gaming Monitor', quantity: 2, price: 499.99 },
          { id: '5', name: 'Gaming Headset', quantity: 1, price: 129.99 },
          { id: '6', name: 'Mouse Pad', quantity: 1, price: 24.99 }
        ],
        totalAmount: 1154.96,
        status: 'processing',
        createdAt: '2024-03-21T15:45:00Z'
      },
      {
        id: '4',
        customerName: 'Bob Wilson',
        products: [
          { id: '7', name: 'Gaming Chair', quantity: 1, price: 299.99 }
        ],
        totalAmount: 299.99,
        status: 'shipped',
        createdAt: '2024-03-19T12:00:00Z'
      },
      {
        id: '5',
        customerName: 'Emma Davis',
        products: [
          { id: '8', name: 'RGB LED Strip', quantity: 3, price: 29.99 },
          { id: '9', name: 'USB Hub', quantity: 1, price: 39.99 }
        ],
        totalAmount: 129.96,
        status: 'completed',
        createdAt: '2024-03-18T09:20:00Z'
      }
    ];

    res.json(mockOrders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; 