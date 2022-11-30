import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Link from '../src/lib/components/Link.svelte';

describe('Link', () => {
	const href = 'https://example.com';

	beforeEach(() => {
		render(Link, { href: href });
	});

	it('Renders a Link', () => {
		expect(screen.getByRole('link')).toBeInTheDocument();
	});

	it('Link has an href attribute', () => {
		expect(screen.getByRole('link')).toHaveAttribute('href', href);
	});
});
