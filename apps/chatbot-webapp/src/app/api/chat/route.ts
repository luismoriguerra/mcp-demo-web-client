import getTools from '@/lib/ai-tools';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are an AI for a Product store.

`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const tools = await getTools();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: SYSTEM_PROMPT,
    messages,
    maxSteps: 20,
    tools,
  });

  return result.toDataStreamResponse();
}