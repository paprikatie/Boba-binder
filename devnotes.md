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

# Stopping point

We stopped at attempting to make an api call to the google maps api

it looks like they have a @google/maps client that we can use via node

so the next step will be creating a simple node server and having that serve data for us!

also nice if we can: get location data via the client instead of hard coding it.
