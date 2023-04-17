import type { Meta, StoryObj } from '@storybook/svelte';

import Switch from './switch-story.svelte';

const meta = {
  title: 'UI/Switch',
  component: Switch,
  argTypes: {}
} satisfies Meta<Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
