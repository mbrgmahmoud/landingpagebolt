import axios from 'axios';

const BROWSE_AI_API_KEY = process.env.BROWSE_AI_API_KEY;

export async function runBrowseAIAgent(agentId: string, url: string) {
  const res = await axios.post(
    `https://api.browse.ai/v2/tasks`,
    {
      agentId,
      inputs: { url }
    },
    {
      headers: {
        Authorization: `Bearer ${BROWSE_AI_API_KEY}`
      }
    }
  );
  return res.data;
}