import express, { Request, Response } from 'express';
import cors from 'cors';
import productsRouter from './routes/products';
import ordersRouter from './routes/orders';
import inventoryRouter from './routes/inventory';
import purchaseRouter from './routes/purchase';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/inventory', inventoryRouter);
app.use('/api/purchase', purchaseRouter);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 