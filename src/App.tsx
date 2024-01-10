// App.tsx
import React, { useState } from "react";
import AsteroidForm from "./components/AsteroidForm";
import AsteroidDetails from "./components/AsteroidDetails";
import {
  getAsteroidDetails,
  getRandomAsteroid,
} from "./services/asteroidService";

interface AsteroidDetailsProps {
  absolute_magnitude_h?: number;
  close_approach_data?: any[];
  designation?: string;
  estimated_diameter?: any;
  id?: string;
  is_potentially_hazardous_asteroid?: boolean;
  is_sentry_object?: boolean;
  links?: any;
  name?: string;
  nasa_jpl_url?: string;
  neo_reference_id?: string;
  orbital_data?: any;
}

const App: React.FC = () => {
  const [asteroidDetails, setAsteroidDetails] =
    useState<AsteroidDetailsProps>(null);

  const handleAsteroidSubmit = async (asteroidId: string) => {
    try {
      const details = await getAsteroidDetails(asteroidId);
      console.log("Details: ", details);

      setAsteroidDetails(details);
    } catch (error) {
      // Handle error (e.g., display a message to the user)
    }
  };

  const handleRandomAsteroid = async () => {
    try {
      const randomAsteroidId = await getRandomAsteroid();
      const details = await getAsteroidDetails(randomAsteroidId);
      setAsteroidDetails(details);
    } catch (error) {
      // Handle error (e.g., display a message to the user)
    }
  };

  return (
    <div>
      {!asteroidDetails ? (
        <AsteroidForm
          onSubmit={handleAsteroidSubmit}
          onRandomAsteroid={handleRandomAsteroid}
        />
      ) : (
        <AsteroidDetails details={asteroidDetails} />
      )}
    </div>
  );
};

export default App;
