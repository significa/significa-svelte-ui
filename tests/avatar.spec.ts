import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Avatar from '../src/lib/components/Avatar.svelte';

describe('Avatar', () => {
	const image = 'https://example.com/image.png';

	beforeEach(() => {
		render(Avatar, { image: image });
	});

	it('Renders Avatar', () => {
		expect(screen.getByTestId('avatar')).toBeInTheDocument();
	});
});
