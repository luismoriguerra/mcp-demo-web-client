import { tool } from "ai";
import { fetchProducts } from "./api";
import { z } from "zod";


const getProducts = tool({
    description: "Get all products from the database",
    parameters: z.object({}),
    execute: async () => {
        return await fetchProducts();
    }
});

export default async function getTools() {
    return {
        getProducts
    }
}