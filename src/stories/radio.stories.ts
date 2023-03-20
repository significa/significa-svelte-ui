import type { Meta, StoryObj } from '@storybook/svelte';

import Radio from '../lib/components/forms/radio.svelte';

const meta = {
  title: 'Forms/Radio',
  component: Radio,
  argTypes: {
    error: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Radio<string>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Error: Story = {
  args: {
    error: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
