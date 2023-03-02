import type { Meta, StoryObj } from '@storybook/svelte';

import { icons } from '../lib/components/icon.svelte';
import CircleButton from '../lib/components/circle-button.svelte';

const meta = {
  title: 'UI/CircleButton',
  component: CircleButton,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    },
    class: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: 'expand'
  }
};

export const DifferentColors: Story = {
  args: {
    icon: 'expand',
    class: 'bg-error text-white'
  }
};
