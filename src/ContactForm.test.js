import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ContactForm from "./components/ContactForm";

test("Form renders", () => {
  render(<ContactForm />);
});

test("inputs", () => {
  render(<ContactForm />);

  const firstInput = screen.getByPlaceholderText(/edd/i);
  const lastInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByLabelText("email");
  // const messageInput = screen.getByLabelText(/message/i);
});
