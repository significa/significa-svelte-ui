import type { Meta, StoryObj } from '@storybook/svelte';

import ThemeSwitch from './theme-switch-story.svelte';

const meta = {
  title: 'UI/Switch',
  component: ThemeSwitch,
  argTypes: {}
} satisfies Meta<ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
