import React, { Component, FormEvent } from "react";
import { Button, TextField } from "@mui/material";

interface AsteroidFormProps {
  onSubmit: (asteroidId: string) => void;
  onRandomAsteroid: () => void;
}

interface AsteroidFormState {
  asteroidId: string;
}

class AsteroidForm extends Component<AsteroidFormProps, AsteroidFormState> {
  constructor(props: AsteroidFormProps) {
    super(props);
    this.state = {
      asteroidId: "",
    };
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.onSubmit(this.state.asteroidId);
  };

  render() {
    const { onRandomAsteroid } = this.props;
    const { asteroidId } = this.state;

    return (
      <form
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={this.handleSubmit}
      >
        <div id="formht">
          <TextField
            label="Asteroid ID"
            value={asteroidId}
            onChange={(e) => this.setState({ asteroidId: e.target.value })}
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
  }
}

export default AsteroidForm;
