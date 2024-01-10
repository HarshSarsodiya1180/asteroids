// AsteroidForm.tsx
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

interface AsteroidFormProps {
  onSubmit: (asteroidId: string) => void;
  onRandomAsteroid: () => void;
}

const AsteroidForm: React.FC<AsteroidFormProps> = ({
  onSubmit,
  onRandomAsteroid,
}) => {
  const [asteroidId, setAsteroidId] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(asteroidId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="formht">
        <TextField
          label="Asteroid ID"
          value={asteroidId}
          onChange={(e) => setAsteroidId(e.target.value)}
          fullWidth
          required
        />
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: "15px" }}
          >
            Show Asteroid Details
          </Button>
          <Button
            onClick={onRandomAsteroid}
            variant="outlined"
            color="secondary"
            style={{ margin: "15px" }}
          >
            Random Asteroid
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AsteroidForm;
