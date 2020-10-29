import { render, screen, fireEvent, act } from "@testing-library/react";
import React from "react";
import ContactForm from "./components/ContactForm";

test("Form renders", () => {
  render(<ContactForm />);
});

test("inputs", () => {
  render(<ContactForm />);

  const firstInput = screen.getByPlaceholderText(/edd/i);
  const lastInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitBtn = screen.getByRole("button");

  fireEvent.change(firstInput, { target: { value: "Nathan" } });
  fireEvent.change(lastInput, { target: { value: "Dumas" } });
  fireEvent.change(emailInput, { target: { value: "nathan@nathan.com" } });
  fireEvent.change(messageInput, { target: { value: "Hello" } });
  expect(firstInput.value).toBe("Nathan");

  fireEvent.click(submitBtn);
});
