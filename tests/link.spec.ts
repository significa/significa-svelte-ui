import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Link from '../src/lib/components/Link.svelte';

describe('Link', () => {
	const label = 'Click me';
	const href = 'https://example.com';

	beforeEach(() => {
		render(Link, { label: label, href: href });
	});

	it('Renders a link', () => {
		expect(screen.getByRole('link')).toBeInTheDocument();
	});

	it('Renders a link with a label', () => {
		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it('Link has an href attribute', () => {
		expect(screen.getByRole('link')).toHaveAttribute('href', href);
	});
});
