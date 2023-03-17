import type { Meta, StoryObj } from '@storybook/svelte';

import FloatingInput from '../lib/components/forms/floating-input.svelte';

const meta = {
  title: 'Forms/Floating Input',
  component: FloatingInput,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    error: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<FloatingInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Type something'
  }
};

export const Error: Story = {
  args: {
    label: 'Type a valid e-mail address',
    value: 'someemail@',
    error: true
  }
};

export const Disabled: Story = {
  args: {
    label: 'Type something',
    disabled: true
  }
};
