import axios from 'axios';

const SERP_API_KEY = process.env.SERP_API_KEY;

export async function fetchProductInfoFromGoogle(query: string) {
  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&hl=ar&api_key=${SERP_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}