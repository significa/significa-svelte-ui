import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Wordmark from '../src/lib/components/Wordmark.svelte';

describe('Avatar', () => {
	beforeEach(() => {
		render(Wordmark);
	});

	it('Renders Wordmark', () => {
		expect(screen.getByTestId('significa-wordmark')).toBeInTheDocument();
	});
});
