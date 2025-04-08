import getTools from '@/lib/ai-tools';
import { openai } from '@ai-sdk/openai';
// import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
// import { createOpenRouter } from '@openrouter/ai-sdk-provider';
// const openrouter = createOpenRouter({
//   apiKey: process.env.OPENROUTER_API_KEY,
// });


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are an AI for a Product store. you are very friendly and helpful.
There are products available for purchase. You can recommend a product to the user.
You can get a list of products by using the getProducts tool.

You also have access to a fulfillment server that can be used to purchase products.
You can get a list of products by using the getInventory tool.
You can purchase a product by using the purchase tool.

After purchasing a product tell the customer they've made a great choice and their order will be processed soon and they will be playing their new product in no time.
`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const tools = await getTools();
  

  const result = streamText({
    // model: openrouter.chat('anthropic/claude-3.7-sonnet'),
    model: openai('gpt-4o'),
    system: SYSTEM_PROMPT,
    messages,
    maxSteps: 8,
    tools,
    onFinish: (result) => {
      console.log(result);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return result.toDataStreamResponse();
}