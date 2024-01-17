// App.test.tsx
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import {
  getAsteroidDetails,
  getRandomAsteroid,
} from "../services/asteroidService";

// Mocking the services
jest.mock("../services/asteroidService");

describe("App Component", () => {
  // test("renders App component with form", () => {
  //   render(<App />);
  //   const formElement = screen.getByLabelText("Asteroid ID");
  //   // expect(formElement).toBeInTheDocument();
  // });

  test("submits asteroid details form and updates state", async () => {
    const mockDetails = {
      id: "123",
      name: "Test Asteroid",
      is_potentially_hazardous_asteroid: false,
    };

    // Mocking the API call
    (getAsteroidDetails as jest.Mock).mockResolvedValueOnce(mockDetails);

    render(<App />);
    const inputElement = screen.getByLabelText("Asteroid ID");
    const submitButton = screen.getByText("Show Asteroid Details");

    fireEvent.change(inputElement, { target: { value: "123" } });
    fireEvent.click(submitButton);

    // Wait for the API call and state update
    await waitFor(() => {
      expect(getAsteroidDetails).toHaveBeenCalledWith("123");
      // expect(screen.getByText("Test Asteroid")).toBeInTheDocument();
    });
  });

  test("clicks random asteroid button and updates state", async () => {
    const mockDetails = {
      id: "456",
      name: "Random Asteroid",
      is_potentially_hazardous_asteroid: true,
    };

    // Mocking the API call
    (getRandomAsteroid as jest.Mock).mockResolvedValueOnce("456");
    (getAsteroidDetails as jest.Mock).mockResolvedValueOnce(mockDetails);

    render(<App />);
    const randomButton = screen.getByText("Random Asteroid");
    fireEvent.click(randomButton);

    // Wait for the API calls and state update
    await waitFor(() => {
      expect(getRandomAsteroid).toHaveBeenCalled();
      expect(getAsteroidDetails).toHaveBeenCalledWith("456");
      // expect(screen.getByText("Random Asteroid")).toBeInTheDocument();
    });
  });
});
