import { useState, useEffect } from 'react';
import axios from 'axios';

function BobaList() {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getNearbyStores() {
      
      const apiCall = await axios.post('https://places.googleapis.com/v1/places:searchNearby');

    }
    getNearbyStores();
        
  }, [])

  if () return 
}

export default BobaList;