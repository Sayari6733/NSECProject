import { openai } from '../index.js';

export async function evaluateAnswer(req, res) {
  const { question, answer } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You're an interviewer evaluating answer of question : ${question}`,
        },
        {
          role: 'user',
          content: `${question}\n\nMy's answer: ${answer}\n\nPlease evaluate this answer in under 200 words.`,
        },
      ],
      max_tokens: 1000, 
    });
  
    console.log("Full completion response:", completion);
    
  } catch (error) {
    res.status(500).json({ error });
  }
}