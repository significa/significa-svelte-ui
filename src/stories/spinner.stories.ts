import type { Meta, StoryObj } from '@storybook/svelte';

import Spinner from '../lib/components/spinner.svelte';

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm']
    }
  }
} satisfies Meta<Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XSmall: Story = {
  args: {
    size: 'xs'
  }
};

export const Small: Story = {
  args: {
    size: 'sm'
  }
};
