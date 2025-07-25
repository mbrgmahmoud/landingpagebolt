import axios from 'axios';

const GROQ_API_KEY = process.env.GROQ_API_KEY;

export async function generateMarketingText(prompt: string) {
  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      model: 'mixtral-8x7b-32768',
      messages: [
        { role: 'system', content: 'أنت مساعد تسويقي تولد نصوص لصفحات الهبوط بالعربية.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
    },
    {
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.choices[0].message.content;
}