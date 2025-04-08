export const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/api/products");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json() as unknown as Array<{
        id: string;
        name: string;
        price: number;
        description: string;
        image?: string;
    }>;
};
