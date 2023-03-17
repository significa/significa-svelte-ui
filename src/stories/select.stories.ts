import type { Meta, StoryObj } from '@storybook/svelte';

import Select from './select-story.svelte';

const meta = {
  title: 'Forms/Select',
  component: Select,
  argTypes: {
    error: {
      control: { type: 'boolean' }
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Error: Story = {
  args: {
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
