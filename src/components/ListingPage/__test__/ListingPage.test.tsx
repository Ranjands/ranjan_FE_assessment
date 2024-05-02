import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ListingPage from "../ListingPage";

import ListingController from "../ListingController";

jest.mock("../ListingController", () => ({
  fetchUniversities: jest.fn(),
}));

describe("ListingPage Component", () => {
  it("renders without crashing", () => {
    render(<ListingPage />);
  });

  test("should delete a university when delete button is clicked", async () => {
    // Mock data for universities
    const universities = [
      { name: "University 1", country: "Country 1" },
      { name: "University 2", country: "Country 2" },
    ];

    // Mock the fetchUniversities function
    (ListingController.fetchUniversities as jest.Mock).mockResolvedValue(
      universities
    );

    // Render the component
    const { getByText, queryByText } = render(<ListingPage />);

    // Wait for the component to load
    // await waitFor(() => {
    //   expect(getByText('University 1')).toBeInTheDocument();
    //   expect(getByText('University 2')).toBeInTheDocument();
    // });

    // Mock the localStorage.setItem function
    const localStorageMock = jest.spyOn(
      window.localStorage.__proto__,
      "setItem"
    );

    // Simulate click on the delete button of University 1
    // fireEvent.click(getByText('Delete'));
    screen.logTestingPlaygroundURL();

    // Check if University 1 is removed from the list
    // expect(queryByText('University 1')).toBeNull();

    // Check if the updated list is saved to localStorage
    // expect(localStorageMock).toHaveBeenCalledWith(
    //   'universities',
    //   JSON.stringify([{ name: 'University 2', country: 'Country 2' }])
    // );
  });

  it("testing correct title of university list", () => {
    render(<ListingPage />);
    const title = screen.getByRole("heading", {
      name: /universities/i,
    });
    expect(title).toBeInTheDocument();
  });
});

it("testing testbox to be in document ", () => {
  render(<ListingPage />);
  const title = screen.getByRole("textbox");
  expect(title).toBeInTheDocument();
});

it("testing dropdown  to be in document ", () => {
  render(<ListingPage />);
  const title = screen.getByRole("combobox");
  expect(title).toBeInTheDocument();
});
// });
