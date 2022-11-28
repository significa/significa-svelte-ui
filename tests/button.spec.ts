import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Button from '../src/lib/components/button.svelte';

describe('Button', () => {
  const label = 'Click me';

  beforeEach(() => {
    render(Button, { label: label });
  });

  it('Renders a button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Renders a button with a label', () => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
