import type { Meta, StoryObj } from '@storybook/svelte';

import AllIcons from './all-icons-story.svelte';

const meta = {
  title: 'UI/All Icons',
  component: AllIcons,
  argTypes: {}
} satisfies Meta<AllIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
