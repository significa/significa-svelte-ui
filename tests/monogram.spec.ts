import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Monogram from '../src/lib/components/Monogram.svelte';

describe('Avatar', () => {
	beforeEach(() => {
		render(Monogram);
	});

	it('Renders Monogram', () => {
		expect(screen.getByTestId('significa-monogram')).toBeInTheDocument();
	});
});
