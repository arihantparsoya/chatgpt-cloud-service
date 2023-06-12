import { Request, Response } from 'express';
import axios from 'axios';

interface Message {
    role: string;
    content: string;
}

export const chatController = async (req: Request, res: Response) => {
    try {
        const response = await callChatGPTAPI(req.body.messages);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

async function callChatGPTAPI(messages: Message[]): Promise<string> {
    const OPENAI_API_KEY = process.env.CHATGPT_API_KEY;
    const url = 'https://api.openai.com/v1/chat/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
    };
  
    const data = {
        model: 'gpt-3.5-turbo',
        messages: messages,
    };
  
    try {
        const response = await axios.post(url, data, { headers });
        const { choices } = response.data;
        const generatedMessage = choices[0].message.content;
        return generatedMessage;
    } catch (error) {
        console.error('Error calling ChatGPT API:', error);
        throw error;
    }
}