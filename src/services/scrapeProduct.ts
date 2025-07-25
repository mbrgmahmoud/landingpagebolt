import puppeteer from 'puppeteer';

export async function scrapeProductInfo(url: string) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1')?.textContent || document.title;
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
                  document.querySelector('img')?.getAttribute('src') || '';
    return { title, description, image };
  });

  await browser.close();
  return data;
}