// asteroidService.ts
import axios from "axios";

const BASE_URL = "https://api.nasa.gov/neo/rest/v1/neo";
const API_KEY = "ZpAyNhNP7tRH5erO1GtXqADLDIXLN56IYZ7qPpwN";

export const getAsteroidDetails = async (asteroidId: string) => {
  const url = `${BASE_URL}/${asteroidId}?api_key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching asteroid details:", error);
    throw error;
  }
};

export const getRandomAsteroid = async () => {
  const browseUrl = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;
  try {
    const response = await axios.get(browseUrl);
    const randomAsteroid =
      response.data.near_earth_objects[
        Math.floor(Math.random() * response.data.near_earth_objects.length)
      ];
    return randomAsteroid.id;
  } catch (error) {
    console.error("Error fetching random asteroid:", error);
    throw error;
  }
};
