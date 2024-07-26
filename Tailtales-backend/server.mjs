import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 5002; // Change the port number if necessary

app.use(cors());

// Example endpoint to fetch all dog breeds
app.get('/api/dogs', async (req, res) => {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    // console.log("yfyufuguy");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    res.status(500).json({ error: 'Failed to fetch dog breeds' });
  }
});

// Example endpoint to search for a specific dog breed by name
app.get('/api/dogs/search', async (req, res) => {
  const { name } = req.query;
  // console.log(name);
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(`Error searching for dog breed "${name}":`, error);
    res.status(500).json({ error: `Failed to search for dog breed "${name}"` });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
