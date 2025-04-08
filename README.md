# Demo Server-Client MCP Project

This project demonstrates a modern client-server architecture with multiple components including a web application, product API, and order management system.

## Project Structure

```
.
├── apps/
│   ├── chatbot-webapp/     # Next.js web application with shadcn/ui
│   ├── products-api/       # Express.js product management API
│   └── mcp-order-server/   # Order management server
└── Makefile               # Build and development automation
```

## Components

### Chatbot Web Application
- Built with Next.js 14
- Modern UI using shadcn/ui components
- Styled with Tailwind CSS
- Clean and maintainable code structure
- Responsive design

### Products API
- Express.js backend server
- RESTful API endpoints
- CORS enabled
- Clean architecture principles
- Product management functionality

### MCP Order Server
- Order management system
- Handles product inventory
- Processes customer orders
- Maintains order history

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Make (for using Makefile commands)

## Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies for all applications:
   ```bash
   make install
   ```

3. Start the development servers:
   ```bash
   make dev
   ```

This will start all necessary services:
- Web application: [http://localhost:3000](http://localhost:3000)
- Products API: [http://localhost:3001](http://localhost:3001)
- Order Server: [http://localhost:3002](http://localhost:3002)

## Development

Each application can be run independently:

```bash
# Start web application
cd apps/chatbot-webapp
npm run dev

# Start products API
cd apps/products-api
npm run dev

# Start order server
cd apps/mcp-order-server
npm run dev
```

## Building for Production

To build all applications:
```bash
make build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 