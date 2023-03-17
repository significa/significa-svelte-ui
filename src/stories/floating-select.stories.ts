import type { Meta, StoryObj } from '@storybook/svelte';

import FloatingSelect from './floating-select-story.svelte';

const meta = {
  title: 'Forms/Floating Select',
  component: FloatingSelect,
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
} satisfies Meta<FloatingSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Choose something'
  }
};

export const Error: Story = {
  args: {
    label: 'Choose a valid option',
    error: true
  }
};

export const Disabled: Story = {
  args: {
    label: 'Choose something',
    disabled: true
  }
};
