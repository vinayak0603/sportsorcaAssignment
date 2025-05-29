const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(require('cors')());

app.get('/api/soccer', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;

  try {
    const response = await axios.get('https://www.scorebat.com/video-api/v3/');
    const allMatches = response.data.response.map(match => ({
      title: match.title,
      date: match.date,
      teams: match.title, // You can parse this to split team names if needed
    }));

    const startIndex = (page - 1) * limit;
    const paginatedMatches = allMatches.slice(startIndex, startIndex + limit);

    res.json(paginatedMatches);
  } catch (error) {
    console.error('Failed to fetch soccer data:', error.message);
    res.status(500).json({ error: 'Failed to fetch soccer data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
