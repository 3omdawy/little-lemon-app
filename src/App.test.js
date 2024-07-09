import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm, { initializeTimes, updateTimes } from './components/BookingForm';
import App from './App';

test('Renders the BookingForm heading', () => {
  Element.prototype.scrollIntoView = jest.fn();
  render(<App />);
  const reserveButton = screen.getByTestId('reserve-link');
  fireEvent.click(reserveButton);

  const headingElement = screen.getByText(/Book Now/i);
  expect(headingElement).toBeInTheDocument();
});

test('Initialization of available times', () => {
  Element.prototype.scrollIntoView = jest.fn();
  render(<App />);

  expect(initializeTimes()).not.toHaveLength(0);;
});

test('Update of available times', () => {
  Element.prototype.scrollIntoView = jest.fn();

  render(<App />);
  expect(updateTimes(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], {date: ''})).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
/*
describe("Booking Form", () => {
  test("User is able to submit the form if the fields are filled correctly", () => {
    const date = "2024-07-24";
    const time = "18:00";
    const guests = "3";
    const occasion = "anniversary";
    const submitFn = jest.fn();

    render(<BookingForm onSubmit={submitFn} />);

    const dateInput = screen.getByLabelText(/date/);
    fireEvent.change(dateInput, { target: { value: date } });

    const timeInput = screen.getByLabelText(/time/);
    fireEvent.change(timeInput, { target: { value: time } });

    const guestInput = screen.getByLabelText(/guests/);
    fireEvent.change(guestInput, { target: { value: guests } });

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });

    const reserveButton = screen.getByTestId('reserve-button');
    fireEvent.click(reserveButton);

    fireEvent.click(screen.getByRole('button', {name: /Book Now/i}))

    expect(submitFn).toHaveBeenCalled();
  });
});
*/