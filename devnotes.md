# api call for places

```
curl -X POST -d '{
  "includedTypes": ["restaurant"],
  "maxResultCount": 10,
  "locationRestriction": {
    "circle": {
      "center": {
        "latitude": 37.7937,
        "longitude": -122.3965},
      "radius": 500.0
    }
  }
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY_HERE" \
-H "X-Goog-FieldMask: places.displayName" \
https://places.googleapis.com/v1/places:searchNearby
```
