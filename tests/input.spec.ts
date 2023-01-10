import { describe, expect, it } from 'vitest';
import { queryByAttribute, render, screen } from '@testing-library/svelte';

import Input from '../src/lib/components/Input.svelte';

describe('Input', () => {
	it('Renders Input', () => {
		render(Input);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('Renders Input with icon', () => {
		const { container } = render(Input, { icon: 'sun' });
		expect(queryByAttribute('data-icon', container, 'sun')).toBeInTheDocument();
	});
});
