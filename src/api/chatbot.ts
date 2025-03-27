
import OpenAI from 'openai';

// Get the API key from environment variables with the VITE_ prefix
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, you should use a server-side API
});

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

export async function sendChatMessage(message: string, previousMessages: Message[] = []): Promise<string> {
  try {
    if (!OPENAI_API_KEY) {
      console.error("OpenAI API key is missing");
      return "Sorry, the AI service is not configured properly. Please check your environment variables.";
    }

    // Convert our message format to OpenAI's format
    const formattedMessages = previousMessages.map(msg => ({
      role: msg.isUser ? 'user' : 'assistant',
      content: msg.text
    }));

    // Add system message at the beginning
    const systemMessage = {
      role: 'system',
      content: 'You are a helpful assistant for a business automation company. Provide concise, accurate information about business automation services, integrations, and solutions. Keep your responses friendly and professional.'
    };

    // Add the current message
    formattedMessages.push({
      role: 'user',
      content: message
    });

    // Create the final messages array with the system message first
    const finalMessages = [systemMessage, ...formattedMessages.slice(-10)]; // Only keep the last 10 messages to avoid token limits

    // Call the OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // Using the latest model
      messages: finalMessages as any,
      temperature: 0.7,
      max_tokens: 500
    });

    // Get the response text
    const responseText = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
    
    return responseText;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw new Error("Failed to get a response from OpenAI");
  }
}
