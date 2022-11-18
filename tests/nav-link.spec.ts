import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import NavLink from '../src/lib/components/NavLink.svelte';

describe('NavLink', () => {
	const label = 'Click me';
	const href = 'https://example.com';

	beforeEach(() => {
		render(NavLink, { label: label, href: href });
	});

	it('Renders a NavLink', () => {
		expect(screen.getByRole('link')).toBeInTheDocument();
	});

	it('Renders a NavLink with a label', () => {
		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it('NavLink has an href attribute', () => {
		expect(screen.getByRole('link')).toHaveAttribute('href', href);
	});
});
