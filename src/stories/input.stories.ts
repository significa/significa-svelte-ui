import type { Meta, StoryObj } from '@storybook/svelte';

import Input from '../lib/components/forms/input.svelte';

const meta = {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' }
    },
    error: {
      control: { type: 'boolean' }
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    placeholder: 'Type something'
  }
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Error: Story = {
  args: {
    placeholder: 'Type a valid e-mail address',
    value: 'someemail@',
    error: true
  }
};

export const Small: Story = {
  args: {
    size: 'sm'
  }
};

export const Medium: Story = {
  args: {
    size: 'md'
  }
};

export const Large: Story = {
  args: {
    size: 'lg'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
