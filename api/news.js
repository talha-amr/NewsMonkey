export default async function handler(req, res) {
  const { category = "general", page = 1 } = req.query;

  const apiKey = process.env.NEWS_API_KEY; // set this in Vercel later
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}