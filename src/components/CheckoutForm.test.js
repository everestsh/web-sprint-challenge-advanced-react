import React from "react";
// import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("form submits correctly", async () => {
    render(<CheckoutForm />);
    const firstNameField = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstNameField, "123");

    const lastName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastName, "Gate");

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "111 Ladera dr,");

    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, "Fairfield");

    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, "94534");
  });