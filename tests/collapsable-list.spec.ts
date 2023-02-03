import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';

import CollapsableList from '../src/lib/components/CollapsableList.svelte';

describe('CollapsableList', () => {
	beforeEach(() => {
		render(CollapsableList, { title: 'Title', items: [{ label: 'item1' }, { label: 'item2' }] });
	});

	it('Renders trigger button', () => {
		expect(
			screen.getByRole('button', {
				name: /Title/i
			})
		).toBeInTheDocument();
	});

	it('Clicking on trigger button displays items', async () => {
		const trigger = screen.getByRole('button', {
			name: /Title/i
		});

		await fireEvent(
			trigger,
			new MouseEvent('click', {
				bubbles: false,
				cancelable: false
			})
		);

		expect(screen.getByText('item1')).toBeInTheDocument();
	});
});
