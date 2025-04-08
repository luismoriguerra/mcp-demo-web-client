import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const server = new McpServer({
  name: "Fulfillment MCP Server",
  version: "1.0.0",
});

server.tool(
  "getOrders", 
  "Get product orders", 
  {
    random_string: z.string().describe("Dummy parameter for no-parameter tools"),
  },
  async () => {
    console.error("Fetching orders");
    const res = await fetch("http://localhost:3001/api/orders");
    const orders = await res.json();

    return { content: [{ type: "text", text: JSON.stringify(orders) }] };
});

server.tool(
  "getInventory", 
  "Get product inventory", 
  {
    random_string: z.string().describe("Dummy parameter for no-parameter tools"),
  },
  async () => {
    console.error("Fetching inventory");
    const res = await fetch("http://localhost:3001/api/inventory");
    const inventory = await res.json();
    console.log(inventory);
    return { content: [{ type: "text", text: JSON.stringify(inventory) }] };
});

server.tool(
  "purchase",
  "Purchase a product",
  {
    productId: z.string().describe("ID of the product to purchase"),
    quantity: z.number().describe("Quantity of products to purchase"),
    customerName: z.string().describe("Name of the customer"),
  },
  async ({ productId, quantity, customerName }) => {
    console.error("Purchasing", { productId, quantity, customerName });
    const res = await fetch("http://localhost:3001/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        quantity,
        customerName,
      }),
    });
    const order = await res.json();

    return { content: [{ type: "text", text: JSON.stringify(order) }] };
  }
);
