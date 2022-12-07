import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';

import ThemeSwitch from '../src/lib/components/ThemeSwitch.svelte';

describe('ThemeSwitch', () => {
	it('Renders ThemeSwitch', () => {
		render(ThemeSwitch);

		expect(screen.getByRole('checkbox')).toBeInTheDocument();
	});

	it('Clicking one time on the ThemeSwitch makes it checked', async () => {
		render(ThemeSwitch);

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
