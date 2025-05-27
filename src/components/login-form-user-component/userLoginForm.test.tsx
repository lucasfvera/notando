import { UserLoginForm } from './index';
import { render, screen } from '@testing-library/react';

beforeEach(() => {
	render(<UserLoginForm />);
});

it('Renders the component', () => {
	const form = screen.getByRole('form');

	expect(form).toBeInTheDocument();
});

test('Form has 2 inputs', () => {
	const { container } = render(<UserLoginForm />);
	expect(container.querySelectorAll('input').length).toBe(2);
});

test('Form has name input', () => {
	// render(<UserLoginForm />);
	//   expect(container.querySelectorAll("input#username").length).toBe(1);
	expect(screen.getByLabelText('Usuario')).not.toBeUndefined();
});
test('Form has password input', () => {
	const { container } = render(<UserLoginForm />);
	expect(container.querySelectorAll('input#password').length).toBe(1);
});
test('Form has submit button', () => {
	const { container } = render(<UserLoginForm />);
	expect(container.querySelectorAll('button[type=submit]').length).toBe(1);
});
describe('Input changes set the value on the state', () => {
	test('Username input changes when typing', () => {});
});
