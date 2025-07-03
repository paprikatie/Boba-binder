import express from 'express';
import { v1 } from '@googlemaps/places';
const app = express();
const { PlacesClient } = v1
const placesClient = new PlacesClient();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/nearby-stores', async (req, res) => {
  const locationRestriction = {};
  const request = {
    locationRestriction,
  };
  
  const response = await placesClient.searchNearby(request);
  console.log(response);
});

app.listen(port, () => {
  console.log(`Server listening at https://localhost:${port}`);
});