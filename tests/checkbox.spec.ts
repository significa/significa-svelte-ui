import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';

import Checkbox from '../src/lib/components/Checkbox.svelte';

describe('Checkbox', () => {
	const label = 'Click me';

	it('Renders a checkbox', () => {
		render(Checkbox);

		expect(screen.getByRole('checkbox')).toBeInTheDocument();
	});

	it('Renders Checkbox with a label', () => {
		render(Checkbox, { label: label });

		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it('Clicking one time on the Checkbox makes it checked', async () => {
		render(Checkbox);

		const trigger = screen.getByRole('checkbox');

		await fireEvent(
			trigger,
			new MouseEvent('click', {
				bubbles: false,
				cancelable: false
			})
		);

		expect(screen.getByRole('checkbox')).toBeChecked();
	});
});
