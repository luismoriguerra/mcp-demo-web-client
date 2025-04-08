import { experimental_createMCPClient, tool } from "ai";
import { fetchProducts } from "./api";
import { z } from "zod";


const mcpClient = await experimental_createMCPClient({
    transport: {
        type: "sse",
        url: "http://localhost:8081/sse",
    },
    name: "Order Service",
});



const getProducts = tool({
    description: "Get all products from the database",
    parameters: z.object({}),
    execute: async () => {
        return await fetchProducts();
    }
});

const recommendProduct = tool({
    description: "Recommend a product to the user",
    parameters: z.object({
        id: z.string().describe("The id of the product to recommend"),
        name: z.string().describe("The name of the product to recommend"),
        price: z.number().describe("The price of the product to recommend"),
        description: z.string().describe("The description of the product to recommend"),
        imageUrl: z.string().describe("The image of the product to recommend"),
    }),
});

export default async function getTools() {
    const tools = await mcpClient.tools();
    return {
        ...tools,
        getProducts,
        recommendProduct,
    }
}