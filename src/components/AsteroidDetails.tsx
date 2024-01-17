import { Component } from "react";
import { Typography } from "@mui/material";

interface AsteroidDetailsProps {
  details: any; // Type based on the API response structure
}

class AsteroidDetails extends Component<AsteroidDetailsProps> {
  render() {
    const { details } = this.props;

    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Asteroid Details</Typography>
        <Typography>
          <b>Name:</b> {details.name}
        </Typography>
        <Typography>
          <b>Is Potentially Hazardous:</b>{" "}
          {details.is_potentially_hazardous_asteroid ? "Yes" : "No"}
        </Typography>
        <Typography>
          <b>Absolute magnitude:</b>
          {details.absolute_magnitude_h}
        </Typography>
        <Typography>
          <b>Is Sentry Object:</b> {details.is_sentry_object ? "Yes" : "No"}
        </Typography>
        <Typography>
          <b>nasa_jpl_url:</b>
          {details.nasa_jpl_url}
        </Typography>
        <Typography>
          <b>neo_reference_id:</b>
          {details.neo_reference_id}
        </Typography>
        {/* Add more details as needed */}
      </div>
    );
  }
}

export default AsteroidDetails;
