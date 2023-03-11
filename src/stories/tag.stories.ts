import type { Meta, StoryObj } from '@storybook/svelte';

import Tag from '../lib/components/tag.svelte';

const meta = {
  title: 'UI/Tag',
  component: Tag,
  argTypes: {
    href: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    active: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Hello world'
  }
};

export const WithLink: Story = {
  args: {
    label: 'Hello world',
    href: '#'
  }
};

export const Active: Story = {
  args: {
    label: 'Hello world',
    active: true
  }
};
