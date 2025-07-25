import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const REMOVE_BG_API_KEY = process.env.REMOVE_BG_API_KEY;

export async function removeBackground(imagePath: string) {
  const form = new FormData();
  form.append('image_file', fs.createReadStream(imagePath));
  form.append('size', 'auto');

  const res = await axios.post('https://api.remove.bg/v1.0/removebg', form, {
    headers: {
      ...form.getHeaders(),
      'X-Api-Key': REMOVE_BG_API_KEY,
    },
    responseType: 'arraybuffer'
  });

  return res.data; // image buffer
}