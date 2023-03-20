import type { Meta, StoryObj } from '@storybook/svelte';

import Label from './label-story.svelte';

const meta = {
  title: 'Forms/Label',
  component: Label,
  argTypes: {
    required: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Required: Story = {
  args: {
    required: true
  }
};
