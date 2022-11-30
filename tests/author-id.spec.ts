import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import AuthorId from '../src/lib/components/AuthorId.svelte';

describe('AuthorId', () => {
	const image = 'https://example.com/image.png';
	const name = 'John Doe';
	const role = 'Developer';

	it('Renders AuthorId', () => {
		render(AuthorId, { image: image, name: name });

		expect(screen.getByTestId('author-id')).toBeInTheDocument();
	});

	it('Renders AuthorId with a name', () => {
		render(AuthorId, { image: image, name: name });

		expect(screen.getByText(name)).toBeInTheDocument();
	});

	it('Renders AuthorId with a name and a role', () => {
		render(AuthorId, { image: image, name: name, role: role });

		expect(screen.getByText(name)).toBeInTheDocument();
		expect(screen.getByText(role)).toBeInTheDocument();
	});
});
