// AsteroidDetails.tsx
import React from "react";
import { Typography } from "@mui/material";

interface AsteroidDetailsProps {
  details: any; // Type based on the API response structure
}

const AsteroidDetails: React.FC<AsteroidDetailsProps> = ({ details }) => {
  return (
    <div>
      <Typography variant="h4">Asteroid Details</Typography>
      <Typography>Name: {details.name}</Typography>
      <Typography>
        Is Potentially Hazardous:{" "}
        {details.is_potentially_hazardous_asteroid ? "Yes" : "No"}
      </Typography>
      <Typography>Absolute magnitude:{details.absolute_magnitude_h}</Typography>
      <Typography>
        Is Sentry Object: {details.is_sentry_object ? "Yes" : "No"}
      </Typography>
      <Typography>nasa_jpl_url:{details.nasa_jpl_url}</Typography>
      <Typography>neo_reference_id:{details.neo_reference_id}</Typography>
      {/* Add more details as needed */}
    </div>
  );
};

export default AsteroidDetails;
