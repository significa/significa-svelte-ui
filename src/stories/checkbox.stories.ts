import type { Meta, StoryObj } from '@storybook/svelte';

import Checkbox from '../lib/components/forms/checkbox.svelte';

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    error: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Checkbox>;

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
