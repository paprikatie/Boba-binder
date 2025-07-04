import express from 'express';
import { Client } from '@googlemaps/google-maps-services-js';
import 'dotenv/config';
const app = express();
const googleClient = new Client({});
const port = 3000;
let GOOGLE_API_KEY = "";
if (process.env.GOOGLE_API_KEY) {
  GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
} else {
  throw new Error('Could not load GOOGLE_API_KEY');
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/nearby-stores', async (req, res) => {
  async function getNearbyStores() {
    try {
      const response = await googleClient.placesNearby({
        params: {
          location: { lat: 37.8715, lng: -122.2730 }, // Example: San Francisco
          radius: 1500, // in meters
          keyword: "boba", // optional: filter by keyword
          key: GOOGLE_API_KEY,
        }
      });
      res.json(response.data.results);
    } catch (error) {
      res.statusCode(500).send({ error: 'Failure!' });
    }
  }
  await getNearbyStores();
});

app.listen(port, () => {
  console.log(`Server listening at https://localhost:${port}`);
});