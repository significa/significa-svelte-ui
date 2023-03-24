import type { Meta, StoryObj } from '@storybook/svelte';

import FlaotingTextarea from '../lib/components/forms/floating-textarea.svelte';

const meta = {
  title: 'Forms/Floating Textarea',
  component: FlaotingTextarea,
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
} satisfies Meta<FlaotingTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Type something'
  }
};

export const Error: Story = {
  args: {
    label: 'Type your life story',
    error: true
  }
};

export const Disabled: Story = {
  args: {
    label: 'Type something',
    disabled: true
  }
};
