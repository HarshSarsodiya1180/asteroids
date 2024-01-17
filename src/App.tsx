import { Component } from "react";
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

interface AppState {
  asteroidDetails: AsteroidDetailsProps | null;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      asteroidDetails: null,
    };
  }

  handleAsteroidSubmit = async (asteroidId: string) => {
    try {
      const details = await getAsteroidDetails(asteroidId);
      console.log("Details: ", details);

      this.setState({ asteroidDetails: details });
    } catch (error) {
      // Handle error (e.g., display a message to the user)
    }
  };

  handleRandomAsteroid = async () => {
    try {
      const randomAsteroidId = await getRandomAsteroid();
      const details = await getAsteroidDetails(randomAsteroidId);
      this.setState({ asteroidDetails: details });
    } catch (error) {
      // Handle error (e.g., display a message to the user)
    }
  };

  render() {
    const { asteroidDetails } = this.state;

    return (
      <div className="AppContainer">
        {!asteroidDetails ? (
          <AsteroidForm
            onSubmit={this.handleAsteroidSubmit}
            onRandomAsteroid={this.handleRandomAsteroid}
          />
        ) : (
          <AsteroidDetails details={asteroidDetails} />
        )}
      </div>
    );
  }
}

export default App;
